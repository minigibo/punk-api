import "./App.scss";
import { Beer } from "./data/types";
import NavBar from "./containers/NavBar/NavBar";
import { useState, FormEvent, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import BeerInfoCard from "./containers/BeerInfo/BeerInfo";
import DrivingCalc from "./containers/DrivingCalc/DrivingCalc";

const getBeers = async (): Promise<Beer[]> => {
  let allBeers: Beer[] = [];
  for (let i = 1; i < 8; i++) {
    const response = await fetch(
      `http://localhost:3333/v2/beers/?per_page=50&page=${i}`
    );
    if (response.ok) {
      const formattedResponse = await response.json();
      allBeers = allBeers.concat(formattedResponse);
    } else {
      throw new Error("Failed to fetch beers");
    }
  }
  return allBeers;
};

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const beerData = await getBeers();
        setBeers(beerData);
      } catch (err) {
        setError("Error fetching beers");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBeers();
  }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value.toLowerCase());
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
        {isLoading ? (
          <div>Loading beers...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home filteredBeers={filteredBeers} isFullWidth={isFullWidth} />
              }
            />
            <Route
              path="/beer/:beerId"
              element={<BeerInfoCard isFullWidth={isFullWidth} />}
            />
            <Route
              path="/driving-calculator"
              element={<DrivingCalc isFullWidth={isFullWidth} />}
            />
          </Routes>
        )}
      </div>
    </HashRouter>
  );
};

export default App;
