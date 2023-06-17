import { useState } from "react";
import { List } from "../List/List";
import { Defaulter } from "./Defaulter";
import { Modal } from "../Modal/Modal";
import closeIcon from "../../assets/close.svg";
import "./Defaulters.scss";

const Defaulters = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDefauler, setSelectedDefaulter] = useState({
    name: "",
    quantity: 0,
  });
  const username = "Admin admin";
  const users = [
    {
      employeeId: "abc123",
      username: "usuario1",
      products: [
        { pId: "xyz987", quantity: 5 }
      ]
    },
    {
      employeeId: "def456",
      username: "usuario2",
      products: [
        { pId: "lmn654", quantity: 8 }
      ]
    },
    {
      employeeId: "ghi789",
      username: "usuario3",
      products: [
        { pId: "qrs321", quantity: 2 },
        { pId: "tuv987", quantity: 4 }
      ]
    },
    {
      employeeId: "jkl012",
      username: "usuario4",
      products: [
        { pId: "wxy654", quantity: 3 }
      ]
    },
    {
      employeeId: "mno345",
      username: "usuario5",
      products: [
        { pId: "pqr987", quantity: 6 }
      ]
    },
    {
      employeeId: "stu678",
      username: "usuario6",
      products: [
        { pId: "vwx321", quantity: 1 },
        { pId: "yza654", quantity: 7 }
      ]
    },
    {
      employeeId: "bcd901",
      username: "usuario7",
      products: [
        { pId: "cde987", quantity: 9 }
      ]
    },
    {
      employeeId: "fgh234",
      username: "usuario8",
      products: [
        { pId: "ghi654", quantity: 2 },
        { pId: "jkl987", quantity: 3 }
      ]
    },
    {
      employeeId: "mno567",
      username: "usuario9",
      products: [
        { pId: "pqr321", quantity: 5 }
      ]
    },
    {
      employeeId: "stu890",
      username: "usuario10",
      products: [
        { pId: "vwx654", quantity: 4 }
      ]
    }
  ];

  const handleOpenModel = (selected) => {
    setSelectedDefaulter(selected);
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div className="Defaulters section">
      <h3>
        Usuario <u>{username}</u>
      </h3>
      <h1>Defaulters</h1>
      <List varient="row">
        {users.map((user) => (
          <Defaulter
            key={user.id}
            name={user.username}
            quantity={user.products.reduce((sum, item) => sum + item.quantity, 0)}
            handleOpenModel={handleOpenModel}
          />
        ))}
      </List>
      {openModal && (
        <Modal>
          <section className="Modal">
            <button
              className="btnClose"
              onClick={() => setOpenModal((prevState) => !prevState)}
            >
              <img src={closeIcon} alt="" />
            </button>
            <h2>{selectedDefauler.name}</h2>
            <p>
              Cantidad: <b>{selectedDefauler.quantity} unidades</b>
            </p>
            <button className="btnStandard">Ya pagó</button>
          </section>
        </Modal>
      )}
    </div>
  );
};

export { Defaulters };
