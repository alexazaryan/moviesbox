import "./ModelWindow.css";

export default function ModelWindow({ activeCategory, handleCategoryChange }) {
  return (
    <div>
      <div className="menu-content">
        <button
          className={`model-window__btn ${
            activeCategory === "popular" ? "add-class" : ""
          }`}
          onClick={() => handleCategoryChange("popular")}
        >
          Популярные
        </button>
        <button
          className={`model-window__btn ${
            activeCategory === "topRated" ? "add-class" : ""
          }`}
          onClick={() => handleCategoryChange("topRated")}
        >
          Высоко оцененные
        </button>
        <button
          className={`model-window__btn ${
            activeCategory === "upcoming" ? "add-class" : ""
          }`}
          onClick={() => handleCategoryChange("upcoming")}
        >
          Скоро выйдут
        </button>
        <button
          className={`model-window__btn ${
            activeCategory === "nowPlaying" ? "add-class" : ""
          }`}
          onClick={() => handleCategoryChange("nowPlaying")}
        >
          Сейчас в кино
        </button>
      </div>
    </div>
  );
}
