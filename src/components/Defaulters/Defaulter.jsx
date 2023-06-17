import PropTypes from "prop-types";
import dollarIcon from "../../assets/dollar.svg";

const Defaulter = ({ name, quantity, handleOpenModel }) => {
  return (
    <article className="Item">
      <div className="Item--content">
        <h2>{name}</h2>
        <p>
          Cantidad del usuario: <b>{quantity}</b>
        </p>
      </div>
      <div className="Item--buttons">
        <button
          onClick={() =>
            handleOpenModel(() => {
              return {
                name,
                quantity,
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
  handleOpenModel: PropTypes.func,
};

export { Defaulter };
