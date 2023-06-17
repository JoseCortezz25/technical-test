import { Item } from "../Item/Item";
import { List } from "../List/List";
import { useCart } from "../../hooks/useCart";
import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  // const productos = [
  //   {
  //     id: 1,
  //     name: "Camiseta de algodón",
  //     quantity: 20,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 2,
  //     name: "Zapatos deportivos",
  //     quantity: 8,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 3,
  //     name: "Bolso de cuero",
  //     quantity: 15,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 4,
  //     name: "Pantalones vaqueros",
  //     quantity: 12,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 5,
  //     name: "Gorra de béisbol",
  //     quantity: 5,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 6,
  //     name: "Vestido de noche",
  //     quantity: 3,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 7,
  //     name: "Reloj de pulsera",
  //     quantity: 10,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 8,
  //     name: "Sandalia de playa",
  //     quantity: 7,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 9,
  //     name: "Gafas de sol",
  //     quantity: 18,
  //     image: "https://placehold.co/400"
  //   },
  //   {
  //     id: 10,
  //     name: "Chaqueta de cuero",
  //     quantity: 6,
  //     image: "https://placehold.co/400"
  //   }
  // ];

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
      <Link to="/">
        <button className="btnStandard">Agregar a lo que debo</button>
      </Link>
    </section>
  );
};

export { Cart };
