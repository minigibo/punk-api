import "./App.scss";
import Card from "./components/Card/Card";
import { Beer } from "./data/types";
import beers from "./data/beers";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Beer Catalog</h1>
      <div className="app__beerList">
        {beers.map((beer: Beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
