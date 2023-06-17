import { useEffect, useState } from "react";
import { List } from "../List/List";
import { Defaulter } from "./Defaulter";
import { Modal } from "../Modal/Modal";
import closeIcon from "../../assets/close.svg";
import "./Defaulters.scss";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Defaulters = () => {
  const { user } = useUser();
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const [defaulters, setDefaulters] = useState(
    window.localStorage.getItem("DEFAULTERS") || []
  );
  const [status, setStatus] = useState("idle");

  const [selectedDefauler, setSelectedDefaulter] = useState({
    id: 0,
    name: "",
    quantity: 0,
    priceTotal: 0,
  });

  useEffect(() => {
    setStatus("loading");
    fetch("/api/checkout", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus("success");
        console.log("data", data);
        setDefaulters(data);
      })
      .catch(() => setStatus("error"));
  }, []);

  const handleOpenModel = (selected) => {
    setSelectedDefaulter(selected);
    setOpenModal((prevState) => !prevState);
  };

  const handleUpdated =  (employeeId) => {
    fetch(`/api/checkout/${employeeId}`, {
      method: "DELETE",
    })
      .then((data) => {
        console.log(data);
        setOpenModal((prevState) => !prevState)
        navigate('/defaulters')
      })
      .catch((error) => {
        throw new Error(error.message)
      });
  };

  if (status === "loading" || status === "idle") {
    return (
      <div className="Defaulters section">
        <h3>
          Usuario <u>{user.username}</u>
        </h3>
        <h1>Morosos</h1>
        Loading awesomeness...
      </div>
    );
  }

  if (defaulters === null || status === "error") {
    return (
      <div className="Defaulters section">
        <h3>
          Usuario <u>{user.username}</u>
        </h3>
        <h1>Morosos</h1>
        No hay información para mostrar
      </div>
    );
  }

  return (
    <div className="Defaulters section">
      <h3>
        Usuario <u>{user.username}</u>
      </h3>
      <h1>Morosos</h1>
      <List varient="row">
        {defaulters.map((user) => (
          <Defaulter
            key={user.employeeId}
            id={user.employeeId}
            name={user.username}
            quantity={user.products.reduce(
              (sum, item) => sum + item.quantity,
              0
            )}
            priceTotal={user.products.reduce(
              (sum, item) => sum + item.price,
              0
            )}
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
              Cantidad: <b>{selectedDefauler.quantity}</b> unidades
            </p>
            <p>
              Precio total a pagar: 
              <b> ${Math.round(selectedDefauler.priceTotal)}</b>
            </p>
            <button
              className="btnStandard"
              onClick={() => handleUpdated(selectedDefauler.id)}
            >
              Ya pagó
            </button>
          </section>
        </Modal>
      )}
    </div>
  );
};

export { Defaulters };
