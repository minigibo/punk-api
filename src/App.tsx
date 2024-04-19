import "./App.scss";
import { Beer } from "./data/types";
import beers from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";
import { useState, FormEvent } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import BeerInfoCard from "./containers/BeerInfo/BeerInfo";

const App = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const applyFilters = (beer: Beer): boolean => {
    if (activeFilters.length === 0) return true;
    return activeFilters.every((filter) => {
      switch (filter) {
        case "highAlcohol":
          return beer.abv !== undefined && beer.abv > 6;
        case "classicRange":
          return (
            beer.first_brewed !== undefined &&
            parseInt(beer.first_brewed) < 2010
          );
        case "highAcidity":
          return beer.ph !== undefined && beer.ph < 4;
        default:
          return true;
      }
    });
  };

  const filteredBeers = beers.filter(
    (beer) => beer.name.toLowerCase().includes(searchTerm) && applyFilters(beer)
  );

  const handleFiltersChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  return (
    <HashRouter>
      <div className="app">
        <NavBar
          setIsFullWidth={setIsFullWidth}
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleFiltersChange={handleFiltersChange}
          activeFilters={activeFilters}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home filteredBeers={filteredBeers} isFullWidth={isFullWidth} />
            }
          />
          <Route path="/beer/:beerId" element={<BeerInfoCard />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
