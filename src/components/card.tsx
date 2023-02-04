import { Pet } from "../data/pet";
import PetImage from "./pet_image";

interface CardProps {
  petObject: Pet;
}

const Card: React.FC<CardProps> = ({
  petObject: { name, species, favFoods, birthYear, image },
}) => {
  const favFoodsText = favFoods.join(", ");

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoodsText}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
      {image && <PetImage imageObject={image} />}
    </div>
  );
};

export default Card;
