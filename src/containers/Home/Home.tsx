import { Beer } from "../../data/types";
import Card from "../../components/Card/Card";
import "./Home.scss";

type HomeProps = {
  filteredBeers: Beer[];
  isFullWidth: boolean;
};

const Home = ({ filteredBeers, isFullWidth }: HomeProps) => {
  return (
    <div className="home">
      <div className={`home__beerList ${isFullWidth ? "full-width" : ""}`}>
        {filteredBeers.map((beer: Beer) => (
          <Card beer={beer} beerId={beer.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Home;
