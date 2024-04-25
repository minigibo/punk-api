import { Beer } from "../../data/types";
import Card from "../../components/Card/Card";
import "./Home.scss";

type HomeProps = {
  filteredBeers: Beer[];
  isFullWidth: boolean;
};

const Home = ({ filteredBeers, isFullWidth }: HomeProps) => {
  return (
    <div className="home" data-testid="home-container">
      <div
        className={`home__beerList ${isFullWidth ? "full-width" : ""}`}
        data-testid="home__beerList"
      >
        {filteredBeers.map((beer: Beer) => (
          <Card beer={beer} beerId={beer.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Home;
