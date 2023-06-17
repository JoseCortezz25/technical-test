import { Item } from "../Item/Item";
import { List } from "../List/List";
import { useCart } from "../../hooks/useCart";
import "./Cart.scss";
// import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();

  const handleCart = () => {
    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, cart }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/')
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="Cart section">
      <h1>My Cart</h1>
      <List varient="row">
        {cart.map((product) => (
          <Item
            key={product.pId}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </List>
      <button className="btnStandard" onClick={() => handleCart()}>
        Agregar a lo que debo
      </button>
    </section>
  );
};

export { Cart };
