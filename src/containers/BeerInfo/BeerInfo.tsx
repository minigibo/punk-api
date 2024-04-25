import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Beer } from "../../data/types";
import "./BeerInfo.scss";

type BeerInfoCardProps = {
  isFullWidth: boolean;
};

const BeerInfoCard = ({ isFullWidth }: BeerInfoCardProps) => {
  const { beerId } = useParams<{ beerId?: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!beerId) return;

    const fetchBeer = async (id: string) => {
      try {
        const response = await fetch(`http://localhost:3333/v2/beers/${id}`);
        if (response.ok) {
          const beerData = await response.json();
          setBeer(beerData[0] || null);
        } else {
          setError("Error fetching beer");
        }
      } catch (err) {
        setError("Error fetching beer");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBeer(beerId);
  }, [beerId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!beer) {
    return <div>Beer not found</div>;
  }

  return (
    <div className={`beer-info-card ${isFullWidth ? "full-width" : ""}`}>
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
        <div className="beer-info-card__food-pairing">
          <h3>This beer goes great with:</h3>
          <p>{beer.food_pairing.join(", ")}.</p>
        </div>
      </div>
    </div>
  );
};

export default BeerInfoCard;
