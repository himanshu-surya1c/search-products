import CardDetails from "../card-details/card-details.component";
import "./card.styles.css";

const Card = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <div>
      <div className="card-container" key={id}>
        <img
          alt={`product ${title}`}
          src={image}
          style={{ height: "180px", width: "180px" }}
        />
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
      <CardDetails />
    </div>
  );
};

export default Card;
