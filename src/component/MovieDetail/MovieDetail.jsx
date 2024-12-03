import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../../api";
import StarRating from "../StarRating/StarRating";

import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams(); // Читаем параметр id из URL
  const navigate = useNavigate(); // Для навигации

  const [movie, setMovie] = useState(null); //
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);

        if (movieData && movieData.title) {
          setMovie(movieData);
        } else {
          setError("Фильм не найден");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-detail__wrap">
      <div className="movie-detail">
        {movie ? (
          <di v className="movie-detail-content">
            <img
              className="movie-detail-img"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500"
              }
              alt={movie.title}
            />
            <div className="movie-detail-text">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p className="release-date">Release Date: {movie.release_date}</p>

              {movie.homepage ? (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="movie-info"
                >
                  movie info
                </a>
              ) : (
                <span className="movie-info__no">No information available</span>
              )}
              {/* ==================================================== */}
              <p className="rating">
                Rating:
                <span>
                  <StarRating rating={movie.vote_average} />
                </span>
                {movie.vote_average}
              </p>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </di>
        ) : (
          <p>Фильм не найден</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
