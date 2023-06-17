import PropTypes from "prop-types";
import plusIcon from "../../assets/plus.svg";
import "./Card.scss";

const Card = ({ product, addToCart }) => {
  return (
    <article className="card">
      <div className="image">
        <img src={product.image} alt={product.name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>
          <img src={plusIcon} alt="Icon of add a product to cart" />
        </button>
      </div>
    </article>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
};

export { Card };
