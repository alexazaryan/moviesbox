import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList/MovieList";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

const App = () => {
  const [category, setCategory] = useState("popular"); // Состояние для категории

  return (
    <>
      <Router basename="/moviesbox">
        <Header setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<MovieList category={category} />} />

          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
