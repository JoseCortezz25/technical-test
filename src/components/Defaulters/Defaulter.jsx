import PropTypes from "prop-types";
import dollarIcon from "../../assets/dollar.svg";

const Defaulter = ({ id, name, quantity, handleOpenModel, priceTotal }) => {
  return (
    <article className="Item">
      <div className="Item--content">
        <h2>{name}</h2>
        <p>
          Cantidad del usuario: <b>{quantity}</b>
        </p>
        <p>Precio total a pagar: <b>${Math.round(priceTotal)}</b></p>
      </div>
      <div className="Item--buttons">
        <button
          onClick={() =>
            handleOpenModel(() => {
              return {
                id,
                name,
                quantity,
                priceTotal
              };
            })
          }
        >
          <img src={dollarIcon} alt="" />
        </button>
      </div>
    </article>
  );
};

Defaulter.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  priceTotal: PropTypes.number.isRequired,
  handleOpenModel: PropTypes.func,
};

export { Defaulter };
