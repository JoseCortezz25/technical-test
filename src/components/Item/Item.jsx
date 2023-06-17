import PropTypes from "prop-types";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import "./Item.scss";

const Item = ({ product, addToCart, removeFromCart }) => {
  return (
    <article className="Item">
      <div className="Item--image">
        <img src={product.image} alt="" />
      </div>

      <div className="Item--content">
        <h2>{product.name}</h2>
        <p>
          Cantidad: <b>{product.quantity}</b>
        </p>
      </div>
      <div className="Item--buttons">
        <button onClick={() => addToCart(product)}>
          <img src={plusIcon} alt="" />
        </button>
        <button onClick={() => removeFromCart(product)}>
          <img src={minusIcon} alt="" />
        </button>
      </div>
    </article>
  );
};

Item.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export { Item };
