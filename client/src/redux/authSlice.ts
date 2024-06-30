import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: boolean;
}

interface Credentials {
  username: string;
  password: string;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
  error: false,
};

export const login: AsyncThunk<string, Credentials, object> = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials) => {
    const response = await axios.post('http://localhost:3030/api/v1/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data.token;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;