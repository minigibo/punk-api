import { Beer } from "../../data/types";
import "./Card.scss";

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  const { name, description, abv, image_url } = beer;

  return (
    <div className="beerCard">
      <img className="beerCard__image" src={image_url} alt={name} />
      <h2 className="beerCard__name">{name}</h2>
      <span className="beerCard__percent">ABV {abv}%</span>
      <p className="beerCard__desc">{description}</p>
    </div>
  );
};

export default Card;
