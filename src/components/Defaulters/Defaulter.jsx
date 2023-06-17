import PropTypes from "prop-types";
import dollarIcon from "../../assets/dollar.svg";

const Defaulter = ({ name, amount, handleOpenModel }) => {
  return (
    <article className="Item">
      <div className="Item--content">
        <h2>{name}</h2>
        <p>
          Cantidad del usuario: <b>{amount}</b>
        </p>
      </div>
      <div className="Item--buttons">
        <button
          onClick={() =>
            handleOpenModel(() => {
              return {
                name,
                amount,
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
  amount: PropTypes.number.isRequired,
  handleOpenModel: PropTypes.func,
};

export { Defaulter };
