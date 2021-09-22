import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "../counter/itemCount";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantCompra, setCantCompra] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantCompra(cantidad);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card" style={{ width: "20rem", padding: "10px" }}>
        <img
          src={item.pictureUrl}
          alt={item.description}
          className="card-img-top border border-dark rounded "
        />
        <div className="card-body">
          <h5 className="card-title fs-4 fw-bold">{item.title}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item fw-bold ">Precio: ${item.price}</li>
        </ul>
        {cantCompra === 0 && (
          <ItemCount stock={item.amount} initial={1} onAdd={onAdd} />
        )}
        {cantCompra !== 0 && (
          <div className="container">
            <div className="row">
              <NavLink exact to="/">
                <Button
                  variant="btn btn-outline-primary mb-2"
                  onClick={() => addItem({ item, cantCompra })}
                >
                  Agregar al Carrito
                </Button>
              </NavLink>
            </div>
            <div className="row">
              <NavLink exact to={"/cart"}>
                <Button
                  variant="success"
                  onClick={() => addItem({ item, cantCompra })}
                >
                  comprar ahora{" "}
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
