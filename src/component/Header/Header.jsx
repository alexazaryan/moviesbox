import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "./Header.css";

const Header = ({ setCategory }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("popular"); // Состояние для хранения активной категории

  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveCategory(category); // Обновляем активную категорию
    navigate("/"); // Переходим на главную страницу
  };

  return (
    <header className="bg-dark text-white py-3 fixed-top">
      <div className="container">
        <h1 className="text-center-h">Choose a movie to your taste</h1>
        <div className="category-buttons d-flex justify-content-center">
          <button
            className={`btn btn-primary mx-2 ${
              activeCategory === "popular" ? "add-class" : ""
            }`} // Применяем класс active
            onClick={() => handleCategoryChange("popular")}
          >
            Популярные
          </button>

          <button
            className={`btn btn-primary mx-2 ${
              activeCategory === "topRated" ? "add-class" : ""
            }`} // Применяем класс active
            onClick={() => handleCategoryChange("topRated")}
          >
            Высоко оцененные
          </button>

          <button
            className={`btn btn-primary mx-2 ${
              activeCategory === "upcoming" ? "add-class" : ""
            }`} // Применяем класс active
            onClick={() => handleCategoryChange("upcoming")}
          >
            Скоро выйдут
          </button>

          <button
            className={`btn btn-primary mx-2 ${
              activeCategory === "nowPlaying" ? "add-class" : ""
            }`} // Применяем класс active
            onClick={() => handleCategoryChange("nowPlaying")}
          >
            Сейчас в кино
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
