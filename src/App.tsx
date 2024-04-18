import "./App.scss";
import Card from "./components/Card/Card";
import { Beer } from "./data/types";
import beers from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";
import { useState, FormEvent } from "react";

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
    <div className="app">
      <NavBar
        setIsFullWidth={setIsFullWidth}
        handleInput={handleInput}
        searchTerm={searchTerm}
        handleFiltersChange={handleFiltersChange}
      />
      <div className={`app__beerList ${isFullWidth ? "full-width" : ""}`}>
        {filteredBeers.map((beer: Beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
