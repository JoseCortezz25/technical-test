import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Card } from "./components/Card/Card";
import { useCart } from "./hooks/useCart";
import "./App.css";
import { useState } from "react";

function App() {
  const { addToCart } = useCart();
  const [searchText, setSearchText] = useState("");
  
  const products = [
    {
      pId: "xyz987",
      name: "Empanada",
      image: "https://placehold.co/200x200",
      description: "Deliciosa empanada rellena de carne y verduras."
    },
    {
      pId: "jkl567",
      name: "Gaseosa",
      image: "https://placehold.co/200x200",
      description: "Refrescante bebida gaseosa con burbujas."
    },
    {
      pId: "abc123",
      name: "Hamburguesa",
      image: "https://placehold.co/200x200",
      description: "Jugosa hamburguesa con carne, queso y vegetales."
    },
    {
      pId: "def456",
      name: "Pizza",
      image: "https://placehold.co/200x200",
      description: "Deliciosa pizza con una variedad de ingredientes."
    },
    {
      pId: "mno789",
      name: "Ensalada",
      image: "https://placehold.co/200x200",
      description: "Ensalada fresca y saludable con una mezcla de vegetales."
    },
    {
      pId: "pqr234",
      name: "Sushi",
      image: "https://placehold.co/200x200",
      description: "Rollos de sushi elaborados con pescado fresco y arroz."
    },
    {
      pId: "stu567",
      name: "Tacos",
      image: "https://placehold.co/200x200",
      description: "Sabrosos tacos mexicanos con tortillas de maíz y diversos rellenos."
    },
    {
      pId: "vwx890",
      name: "Hot Dog",
      image: "https://placehold.co/200x200",
      description: "Clásico hot dog con salchicha, pan y una variedad de condimentos."
    },
    {
      pId: "ghi345",
      name: "Pastel de chocolate",
      image: "https://placehold.co/200x200",
      description: "Delicioso pastel de chocolate con un suave y rico sabor."
    },
    {
      pId: "lmn678",
      name: "Pollo a la parrilla",
      image: "https://placehold.co/200x200",
      description: "Pollo jugoso y sabroso cocinado a la parrilla."
    },
    {
      pId: "yza901",
      name: "Pasta Alfredo",
      image: "https://placehold.co/200x200",
      description: "Pasta con una cremosa salsa Alfredo y queso parmesano."
    },
    {
      pId: "bcd234",
      name: "Sopa de tomate",
      image: "https://placehold.co/200x200",
      description: "Caliente y reconfortante sopa de tomate con especias aromáticas."
    },
    {
      pId: "efg567",
      name: "Arroz frito",
      image: "https://placehold.co/200x200",
      description: "Sabroso arroz frito salteado con vegetales y trozos de carne."
    },
    {
      pId: "hij890",
      name: "Ceviche",
      image: "https://placehold.co/200x200",
      description: "Refrescante platillo de ceviche con pescado marinado en limón y especias."
    },
    {
      pId: "opq123",
      name: "Churros",
      image: "https://placehold.co/200x200",
      description: "Deliciosos churros crujientes y azucarados, ideales para acompañar con chocolate caliente."
    }
  ];

  const searchedCart = products.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <>
      <Header setSearchText={setSearchText} />
      <List title="Productos">
        {searchedCart.map((product) => (
          <Card
            key={product.pId}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </List>
    </>
  );
}

export default App;
