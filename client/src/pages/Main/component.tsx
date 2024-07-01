import React, { useEffect, useState } from "react";
import Aside from "../../components/Aside/component";
import styles from "./styles.module.css";
import Input from "../../components/Input/component";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movieSlice";
import MovieCard from "../../components/MovieCard/component";
import Icon from "../../components/Icon/component";
import arrow_right from "../../img/arrow-right.svg";
import arrow_left from "../../img/arrow-left.svg";
import Loading from "../../Loading/component";
import { debounce } from "./utils";

const MainPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const { search, status } = useSelector((state: RootState) => state.movies);
  const searchDebounce = debounce(setTitle, 500);

  useEffect(() => {
    dispatch(getMovies({ page: page.toString() }));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getMovies(title ? { title } : {}));
  }, [dispatch, title]);

  const renderMovies = () => {
    if (status === 'loading')
      return <Loading />
    return <>
      {
        search.search_result.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie} />
          );
        })
      }
    </>
  }

  return (
    <>
      <Aside />
      <div className={styles.films}>
        <Input className={styles.search} id="search" type="text" placeholder="Название фильма" onChange={searchDebounce} />
        {renderMovies()}
        <div className={styles.pages}>
          <button className={styles.btn_page} disabled={page === 1} onClick={() => setPage(value => value - 1)}>
            <Icon height={16} width={16} src={arrow_left} />
          </button>
          {page}
          <button className={styles.btn_page} disabled={page === search.total_pages} onClick={() => setPage(value => value + 1)}>
            <Icon height={16} width={16} src={arrow_right} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;