import "./card.styles.css";

const Card = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`product ${title}`}
        src={image}
        style={{ height: "180px", width: "180px" }}
      />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;
