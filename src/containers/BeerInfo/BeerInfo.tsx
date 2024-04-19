import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Beer } from "../../data/types";
import beers from "../../data/beers";

const BeerInfoCard = () => {
  const { beerId } = useParams<{ beerId?: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    if (!beerId) return;
    const selectedBeer = beers.find((beer) => beer.id === parseInt(beerId));
    setBeer(selectedBeer || null);
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beer-info-card">
      <img
        src={beer.image_url}
        alt={beer.name}
        className="beer-info-card__image"
      />
      <div className="beer-info-card__details">
        <h2 className="beer-info-card__name">{beer.name}</h2>
        <p className="beer-info-card__description">{beer.description}</p>
        <p className="beer-info-card__abv">ABV: {beer.abv}%</p>
        <p className="beer-info-card__ibu">IBU: {beer.ibu}</p>
      </div>
    </div>
  );
};

export default BeerInfoCard;
