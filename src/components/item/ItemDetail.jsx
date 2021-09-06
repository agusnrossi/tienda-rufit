import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "../counter/itemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantCompra, setCantCompra] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantCompra(cantidad);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card" style={{ width: "30rem", padding: "10px" }}>
        <img
          src={item.pictureUrl}
          alt={item.description}
          className="card-img-top border border-dark rounded "
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: ${item.price}</li>
        </ul>
        {cantCompra === 0 && (
          <ItemCount stock={item.amount} initial={1} onAdd={onAdd} />
        )}
        {cantCompra !== 0 && (
          <div className="container">
            <div className="row">
              <Button
                className="btn btn-outline-primary mb-2"
                as={Link}
                exact
                to={"/"}
                onClick={() => addItem({ item, cantCompra })}
              >
                Agregar al Carrito y Seguir Comprando
              </Button>
            </div>
            <div className="row">
              <Button
                variant="success"
                as={Link}
                exact
                to={"/cart"}
                onClick={() => addItem({ item, cantCompra })}
              >
                Terminar compra{" "}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
