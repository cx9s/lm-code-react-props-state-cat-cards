import { Cat } from "../data/pet";
import CatImage from "./cat_image";
import catImageData from "../data/cat-image-data";

interface CatCardProps {
  catObject: Cat;
  catIndex: number;
}

const CatCard: React.FC<CatCardProps> = ({
  catObject: { name, species, favFoods, birthYear },
  catIndex,
}) => {
  const favFoodsText = favFoods.join(", ");
  const currentImage = catImageData[catIndex];

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoodsText}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
      {catIndex < catImageData.length && (
        <CatImage imageObject={currentImage} />
      )}
    </div>
  );
};

export default CatCard;
