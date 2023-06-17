import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";
import "./Header.scss";

const Header = ({ setSearchText }) => {
  const { cart } = useCart();
  const { user } = useUser();
  console.log("user", Object.entries(user) === 0);

  const onSearchValueChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <header>
      {Object.keys(user).length === 0 || (
        <div className="greeting">
          <h2>Bienvenido, {user.username}</h2>
        </div>
      )}
      <section>
        <nav>
          <input
            type="search"
            placeholder="Buscar..."
            onChange={onSearchValueChange}
          />
        </nav>
        <nav>
          {!(Object.keys(user).length === 0) ? (
            <Link to="/cart">
              <button>
                <span>{cart.length}</span>
                <img src={cartIcon} alt="" />
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button>
                <span>{cart.length}</span>
                <img src={userIcon} alt="" />
              </button>
            </Link>
          )}
        </nav>
      </section>
    </header>
  );
};

Header.propTypes = {
  setSearchText: PropTypes.func,
};

export { Header };
