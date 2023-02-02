import { Image } from "../data/cat-image-data";

const CatImage: React.FC<{ imageObject: Image }> = ({ imageObject }) => {
  const {
    image,
    altText,
    licenceType,
    licenceUrl,
    attributionName,
    attributionUrl,
  } = imageObject;

  return (
    <>
      <img className="card__image" src={image} alt={altText} />
      <p className="card__text__small">
        Image licenced under <a href={licenceUrl}>{licenceType}</a>
        {attributionName && (
          <>
            &nbsp;by <a href={attributionUrl}>{attributionName}</a>
          </>
        )}
      </p>
    </>
  );
};

export default CatImage;
