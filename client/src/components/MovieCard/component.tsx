import React from "react";
import styles from "./styles.module.css";
import { Movie } from "../../redux/movieSlice";

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.movie}>
      {/* <div className={styles.poster}>

      </div> */}
      <div className={styles.content}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <div className={styles.options}>
            <div className={styles.option}>
              Жанр
            </div>
            <div className={styles.option}>
              Год выпуска
            </div>
            <div className={styles.option}>
              Описание
            </div>
          </div>
          <div className={styles.options_content}>
            <div className={styles.option_content}>
              {movie.genre}
            </div>
            <div className={styles.option_content}>
              {movie.release_year}
            </div>
            <div className={styles.option_content}>
              {movie.description}
            </div>
          </div>
        </div>

      </div>
      <div className={styles.rating}>

      </div>
    </div>
  );
};

export default MovieCard;