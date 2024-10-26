import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`); // Переход на страницу фильма по его ID
  };

  if (!movie) {
    return <div>Нет информации о фильме</div>;
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="movie-card-box-img">
        <img
          className="movie-card-img"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500"
          }
          alt={movie.title || "Нет информации о фильме"}
        />
      </div>

      <h2 className="movie-card__title">
        {movie.title && movie.title.length > 20
          ? `${movie.title.slice(0, 20)}...`
          : movie.title || "Нет информации о фильме"}
      </h2>

      <p className="movie-card__date">
        Release Date: {movie.release_date || "Не указана"}
      </p>
      <p className="movie-card__average">
        Rating:
        <span className="mc-sa">
          {movie.vote_average !== undefined ? movie.vote_average : "Нет оценки"}
        </span>
      </p>
      <StarRating rating={movie.vote_average} />
    </div>
  );
};

export default MovieCard;
