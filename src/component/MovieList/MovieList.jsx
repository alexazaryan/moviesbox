import React, { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} from "../../../api";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        let movieData;
        if (category === "popular") {
          movieData = await getPopularMovies();
        } else if (category === "topRated") {
          movieData = await getTopRatedMovies();
        } else if (category === "upcoming") {
          movieData = await getUpcomingMovies();
        } else if (category === "nowPlaying") {
          movieData = await getNowPlayingMovies();
        }
        setMovies(movieData.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    //
    fetchMovies();
  }, [category]); // Обновляем фильмы при смене категории

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
