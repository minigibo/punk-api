import "./App.scss";
import Card from "./components/Card/Card";
import { Beer } from "./data/types";
import beers from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";
import { useState } from "react";

const App = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <div className="app">
      <NavBar setIsFullWidth={setIsFullWidth} />
      <div className={`app__beerList ${isFullWidth ? "full-width" : ""}`}>
        {beers.map((beer: Beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
