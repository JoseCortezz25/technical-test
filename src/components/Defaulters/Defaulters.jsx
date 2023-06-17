import { useState } from "react";
import { List } from "../List/List";
import { Defaulter } from "./Defaulter";
import { Modal } from "../Modal/Modal";
import closeIcon from '../../assets/close.svg'
import "./Defaulters.scss";

const Defaulters = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDefauler, setSelectedDefaulter] = useState({
    name: "",
    amount: 0,
  });
  const username = "Admin admin";
  const users = [
    {
      id: 1,
      username: "usuario1",
      amount: 100,
    },
    {
      id: 2,
      username: "usuario2",
      amount: 50,
    },
    {
      id: 3,
      username: "usuario3",
      amount: 75,
    },
    {
      id: 4,
      username: "usuario4",
      amount: 30,
    },
    {
      id: 5,
      username: "usuario5",
      amount: 90,
    },
    {
      id: 6,
      username: "usuario6",
      amount: 10,
    },
    {
      id: 7,
      username: "usuario7",
      amount: 45,
    },
    {
      id: 8,
      username: "usuario8",
      amount: 60,
    },
    {
      id: 9,
      username: "usuario9",
      amount: 20,
    },
    {
      id: 10,
      username: "usuario10",
      amount: 5,
    },
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
            amount={user.amount}
            handleOpenModel={handleOpenModel}
          />
        ))}
      </List>
      {openModal && (
        <Modal>
          <section className="Modal">
            <button className="btnClose" onClick={() => setOpenModal(prevState => !prevState)}>
              <img src={closeIcon} alt="" />
            </button>
            <h2>{selectedDefauler.name}</h2>
            <p>
              Cantidad: <b>{selectedDefauler.amount} unidades</b>
            </p>
            <button className="btnStandard">Ya pagó</button>
          </section>
        </Modal>
      )}
    </div>
  );
};

export { Defaulters };
