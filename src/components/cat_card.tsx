interface CatCardProps {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
}

const CatCard: React.FC<CatCardProps> = (props) => {
  const favFoodsText = props.favFoods.join(", ");
  return (
    <div className="card">
      <h3 className="card__text card__header">{props.name}</h3>
      <p className="card__text">Species: {props.species}</p>
      <p className="card__text">Favourite Food(s): {favFoodsText}</p>
      <p className="card__text">Birth Year: {props.birthYear}</p>
    </div>
  );
};

export default CatCard;
