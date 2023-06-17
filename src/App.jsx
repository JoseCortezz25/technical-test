import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Card } from "./components/Card/Card";
import { useCart } from "./hooks/useCart";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { addToCart } = useCart();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [products]);

  const searchedCart = products.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header setSearchText={setSearchText} />
      <List title="Productos">
        {searchedCart.map((product) => (
          <Card key={product.pId} product={product} addToCart={addToCart} />
        ))}
      </List>
    </>
  );
}

export default App;
