import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside/component";
import styles from "./styles.module.css";
import Input from "../../components/Input/component";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movieSlice";
import MovieCard from "../../components/MovieCard/component";

const MainPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState('1');
  const dispatch = useDispatch<AppDispatch>();
  const { search, status, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getMovies({}));
  }, [dispatch]);

  return (
    <>
      <Aside />
      <div className={styles.films}>
        <Input className={styles.search} id="search" type="text" placeholder="Название фильма" onChange={() => { }} />
        {
          search.search_result.map(movie => {
            return (
              <MovieCard movie={movie} />
            );
          })
        }
      </div>
    </>
  );
};

export default MainPage;