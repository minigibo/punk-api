import "./App.scss";
import Card from "./components/Card/Card";
import { Beer } from "./data/types";
import beers from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";
import { useState, FormEvent } from "react";

const App = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <NavBar
        setIsFullWidth={setIsFullWidth}
        handleInput={handleInput}
        searchTerm={searchTerm}
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
