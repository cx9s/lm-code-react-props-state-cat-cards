import { Dog } from "../data/pet";

interface DogCardProps {
  dogObject: Dog;
}

const DogCard: React.FC<DogCardProps> = ({
  dogObject: { name, species, favFoods, birthYear },
}) => {
  const favFoodsText = favFoods.join(", ");

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoodsText}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default DogCard;
