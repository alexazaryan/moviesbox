import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList/MovieList";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";



const App = () => {
   const [category, setCategory] = useState("popular"); // Состояние для категории

   const [fade, setFade] = useState(false);

   const handleFooterFade = () => {
      setFade(true); // Сразу скрываем футер
      setTimeout(() => setFade(false), 500);
   };

   useEffect(() => {
      handleFooterFade();
   }, [category]);

   return (
      <>
         <Router basename="/">
            <Header setCategory={setCategory} />
            <Routes>
               <Route path="/" element={<MovieList category={category} />} />

               <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
            {/* <Footer /> */}
            <Footer fade={fade} />
         </Router>
      </>
   );
};

export default App;
