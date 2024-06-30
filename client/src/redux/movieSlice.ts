import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Movie {
  id: string;
  title: string;
  description: string;
  rating: string;
  genre: string;
  release_year: string;
}

type SearchType = {
  search_result: Movie[];
  total_pages: number
}

export interface MovieState {
  search: SearchType;
  movie: Movie | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: boolean;
}

const initialState: MovieState = {
  search: {
    search_result: [],
    total_pages: 0
  },
  movie: null,
  status: 'idle',
  error: false,
};

type Params = {
  title?: string;
  page?: string;
}

export const getMovies: AsyncThunk<SearchType, Params, object> = createAsyncThunk('movies/getMovies', async (params: { title?: string; page?: string }) => {
  const response = await axios.get(`http://localhost:3030/api/v1/search`, { params });
  return response.data;
});

// export const getMovieById = createAsyncThunk('movies/getMovieById', async (id: string) => {
//   const response = await axios.get(`http:localhost:3030/api/v1/movie/${id}`);
//   return response.data;
// });

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.search = action.payload;
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = 'failed';
        state.error = true;
      })
    // .addCase(getMovieById.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(getMovieById.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.film = action.payload;
    // })
    // .addCase(getMovieById.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message || 'Failed to fetch film';
    // });
  }
});

export default movieSlice.reducer;