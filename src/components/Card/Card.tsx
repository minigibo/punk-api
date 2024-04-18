import { Beer } from "../../data/types";
import "./Card.scss";

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  const { name, description, abv, image_url } = beer;

  const cleanedDesc = (value: string) => {
    if (value.length < 200) {
      return value;
    } else {
      return value.substring(0, value.lastIndexOf(".", 200)) + "...";
    }
  };

  return (
    <div className="beerCard">
      <img className="beerCard__image" src={image_url} alt={name} />
      <h2 className="beerCard__name">{name}</h2>
      <span className="beerCard__percent">ABV {abv}%</span>
      <p className="beerCard__desc">{cleanedDesc(description)}</p>
    </div>
  );
};

export default Card;
