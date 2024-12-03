import { API_URL, API_KEY } from "./config";

// Получаем популярные фильмы
const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Ошибка: ${response.status}`);
};

// Получаем топ-rated фильмы
const getTopRatedMovies = async () => {
  const response = await fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Ошибка: ${response.status}`);
};

// Получаем скоро выходящие фильмы
const getUpcomingMovies = async () => {
  const response = await fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Ошибка: ${response.status}`);
};

// Получаем сейчас в кинотеатрах фильмы
const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${API_URL}/movie/now_playing?api_key=${API_KEY}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Ошибка: ${response.status}`);
};

// выбор фильма мо клику
const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized: Проверьте свой API-ключ.");
    }
    throw new Error("Ошибка загрузки данных фильма.");
  }
  const data = await response.json();
  return data;
};

// Экспортируем функции
export {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getMovieDetails,
};
