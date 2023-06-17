import PropTypes from "prop-types";
import plusIcon from "../../assets/plus.svg";
import "./Card.scss";

const Card = ({ image, title, description }) => {
  return (
    <article className="card">
      <div className="image">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
        <button className="">
          <img src={plusIcon} alt="" />
        </button>
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { Card };
