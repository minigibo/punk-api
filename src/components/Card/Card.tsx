import { Beer } from "../../data/types";
import "./Card.scss";
import { Link } from "react-router-dom";

type CardProps = {
  beer: Beer;
  beerId: string;
};

const Card = ({ beer, beerId }: CardProps) => {
  const { name, description, abv, image_url } = beer;

  const cleanedDesc = (value: string) => {
    if (value.length < 200) {
      return value;
    } else {
      return value.substring(0, value.lastIndexOf(".", 200)) + "...";
    }
  };

  return (
    <Link to={`/beer/${beerId}`} className="beerCard">
      <img className="beerCard__image" src={image_url} alt={name} />
      <h2 className="beerCard__name">{name}</h2>
      <span className="beerCard__percent">ABV {abv}%</span>
      <p className="beerCard__desc">{cleanedDesc(description)}</p>
    </Link>
  );
};

export default Card;
