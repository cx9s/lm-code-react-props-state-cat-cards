import { Cat, Dog } from "../data/pet";
import CatImage from "./cat_image";
import catImageData from "../data/cat-image-data";

interface CardProps {
  petObject: Cat | Dog;
  index?: number;
}

const Card: React.FC<CardProps> = ({
  petObject: { name, species, favFoods, birthYear },
  index = -1,
}) => {
  const favFoodsText = favFoods.join(", ");
  const currentImage =
    index > -1
      ? catImageData[index]
      : { image: "", altText: "", licenceType: "", licenceUrl: "" };

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoodsText}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
      {index > -1 && index < catImageData.length && (
        <CatImage imageObject={currentImage} />
      )}
    </div>
  );
};

export default Card;
