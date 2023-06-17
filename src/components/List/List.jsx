import PropTypes from "prop-types";
import "./List.scss";

const List = ({ title, children, varient = 'col' }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className={varient === 'row' ? 'feed--row' : 'feed'}>{children}</div>
    </section>
  );
};

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  varient: PropTypes.string
};

export { List };
