import "./App.scss";
import Card from "./components/Card/Card";
import { Beer } from "./data/types";
import beers from "./data/beers";

const App = () => {
  return (
    <div className="app">
      <h1>Beer Catalog</h1>
      <div className="beerList">
        {beers.map((beer: Beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
