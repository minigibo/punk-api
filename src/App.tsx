import "./App.scss";
import Card from "./components/Card/Card";
import { Beer } from "./data/types";
import beers from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="app__beerList">
        {beers.map((beer: Beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
