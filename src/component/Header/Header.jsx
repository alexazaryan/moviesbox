import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import "./Header.css";

const Header = ({ setCategory }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("popular"); // Состояние для хранения активной категории
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680); // Состояние для мобильного вида

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 680);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveCategory(category); // Обновляем активную категорию
    navigate("/"); // Переходим на главную страницу
  };

  return (
    <>
      {isMobile ? (
        <BurgerMenu
          activeCategory={activeCategory}
          handleCategoryChange={handleCategoryChange}
        />
      ) : (
        <header className="bg-dark text-white py-3 fixed-top">
          <div className="container">
            <h1 className="text-center-h">Choose a movie to your taste</h1>
            <div className="category-buttons d-flex justify-content-center">
              <button
                className={`btn btn-primary mx-2 ${
                  activeCategory === "popular" ? "add-class" : ""
                }`}
                onClick={() => handleCategoryChange("popular")}
              >
                Популярные
              </button>
              <button
                className={`btn btn-primary mx-2 ${
                  activeCategory === "topRated" ? "add-class" : ""
                }`}
                onClick={() => handleCategoryChange("topRated")}
              >
                Высоко оцененные
              </button>
              <button
                className={`btn btn-primary mx-2 ${
                  activeCategory === "upcoming" ? "add-class" : ""
                }`}
                onClick={() => handleCategoryChange("upcoming")}
              >
                Скоро выйдут
              </button>
              <button
                className={`btn btn-primary mx-2 ${
                  activeCategory === "nowPlaying" ? "add-class" : ""
                }`}
                onClick={() => handleCategoryChange("nowPlaying")}
              >
                Сейчас в кино
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
