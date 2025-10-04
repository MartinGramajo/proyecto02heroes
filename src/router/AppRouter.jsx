import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import LayoutComponent from "../components/LayoutComponent";

import MarvelScreen from "../pages/MarvelScreen";
import DCScreen from "../pages/DCScreen";
import HomeScreen from "../pages/HomeScreen";

import { heroes } from "../data/heroes";

const AppRouter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => setSearchTerm(value);

  const marvelHeroes = heroes.filter(
    (hero) => hero.publisher === "Marvel Comics"
  );
  const dcHeroes = heroes.filter((hero) => hero.publisher === "DC Comics");

  return (
    <BrowserRouter>
      <LayoutComponent searchTerm={searchTerm} onSearch={handleSearch}>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen heroes={heroes} searchTerm={searchTerm} />}
          />
          <Route
            path="/marvel"
            element={<MarvelScreen heroes={marvelHeroes} searchTerm={searchTerm} />}
          />
          <Route
            path="/dc"
            element={<DCScreen heroes={dcHeroes} searchTerm={searchTerm} />}
          />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
};

export default AppRouter;
