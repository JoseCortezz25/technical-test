import PropTypes from "prop-types";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import "./Item.scss";

const Item = ({ image, name, amount }) => {
  return (
    <article className="Item">
      <div className="Item--image">
        <img src={image} alt="" />
      </div>

      <div className="Item--content">
        <h2>{name}</h2>
        <p>
          Cantidad: <b>{amount}</b>
        </p>
      </div>
      <div className="Item--buttons">
        <button>
          <img src={plusIcon} alt="" />
        </button>
        <button>
          <img src={minusIcon} alt="" />
        </button>
      </div>
    </article>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export { Item };
