import { Item } from '../Item/Item';
import { List } from '../List/List'
import './Cart.scss'

const Cart = () => {
  const productos = [
    {
      id: 1,
      name: "Camiseta de algodón",
      amount: 20,
      image: "https://placehold.co/400"
    },
    {
      id: 2,
      name: "Zapatos deportivos",
      amount: 8,
      image: "https://placehold.co/400"
    },
    {
      id: 3,
      name: "Bolso de cuero",
      amount: 15,
      image: "https://placehold.co/400"
    },
    {
      id: 4,
      name: "Pantalones vaqueros",
      amount: 12,
      image: "https://placehold.co/400"
    },
    {
      id: 5,
      name: "Gorra de béisbol",
      amount: 5,
      image: "https://placehold.co/400"
    },
    {
      id: 6,
      name: "Vestido de noche",
      amount: 3,
      image: "https://placehold.co/400"
    },
    {
      id: 7,
      name: "Reloj de pulsera",
      amount: 10,
      image: "https://placehold.co/400"
    },
    {
      id: 8,
      name: "Sandalia de playa",
      amount: 7,
      image: "https://placehold.co/400"
    },
    {
      id: 9,
      name: "Gafas de sol",
      amount: 18,
      image: "https://placehold.co/400"
    },
    {
      id: 10,
      name: "Chaqueta de cuero",
      amount: 6,
      image: "https://placehold.co/400"
    }
  ];
  
  return (
    <section className='Cart section'>
      <h1>My Cart</h1>
      <List varient='row'>
        {productos.map(product => (
          <Item key={product.id} name={product.name} image={product.image} amount={product.amount} />
        ))}
      </List>
      <button className="btnStandard">Agregar a lo que debo</button>

    </section>
  )
}

export { Cart }