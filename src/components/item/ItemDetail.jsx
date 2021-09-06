import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
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
    <div>
      <Card
        className="animate_bounceIn"
        style={{ width: "18rem", padding: "10px" }}
      >
        <img src={item.pictureUrl} className="card-img-top" alt="" />
        <img
          src={item.pictureUrl}
          alt={item.description}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>${item.price}</Card.Text>
        </Card.Body>
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
      </Card>
    </div>
  );
};

export default ItemDetail;
