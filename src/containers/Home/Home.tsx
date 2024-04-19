import { Beer } from "../../data/types";
import Card from "../../components/Card/Card";

type HomeProps = {
  filteredBeers: Beer[];
  isFullWidth: boolean;
};

const Home = ({ filteredBeers, isFullWidth }: HomeProps) => {
  return (
    <div className="app">
      <div className={`app__beerList ${isFullWidth ? "full-width" : ""}`}>
        {filteredBeers.map((beer: Beer) => (
          <Card beer={beer} beerId={beer.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Home;
