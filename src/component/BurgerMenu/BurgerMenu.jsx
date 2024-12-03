import { useState } from "react";
import ModelWindow from "../ModelWindow/ModelWindow";

import "./BurgerMenu.css";

export default function BurgerMenu({ activeCategory, handleCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelection = (category) => {
    handleCategoryChange(category); // Изменяем категорию
    setIsOpen(false); // Закрываем модельное окно
  };

  return (
    <div className={`box-line__general`}>
      <ul className="box-line" onClick={handleClick}>
        <li className={`line-one ${isOpen ? "line-one__active" : ""}`}></li>
        <li className={`line-two ${isOpen ? "line-two__none" : ""}`}></li>
        <li className={`line-three ${isOpen ? "line-three__active" : ""}`}></li>
      </ul>
      <div className={`model-container ${isOpen ? "show" : ""}`}>
        <ModelWindow
          activeCategory={activeCategory}
          handleCategoryChange={handleCategorySelection} // Передаём функцию для закрытия окна
        />
      </div>
    </div>
  );
}
