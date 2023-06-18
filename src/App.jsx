import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Card } from "./components/Card/Card";
import { useCart } from "./hooks/useCart";
import { products as allProducts } from "./mocks/browser";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const { addToCart } = useCart();
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState(allProducts || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/products", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((error) => console.log(error))
  }, []);

  const searchedCart = products.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section>
      <Header setSearchText={setSearchText} />
      <List title="Productos">
        {searchedCart.map((product) => (
          <Card key={product.pId} product={product} addToCart={addToCart} />
        ))}
      </List>
    </section>
  );
}

export default App;
