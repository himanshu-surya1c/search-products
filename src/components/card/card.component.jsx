import "./card.styles.css";

const Card = ({ product }) => {
  const { title, price } = product;

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;
