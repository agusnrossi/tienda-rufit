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
        <img src={item.data.pictureUrl} className="card-img-top" alt="" />
        <img
          src={item.data.pictureUrl}
          alt={item.data.description}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title>{item.data.title}</Card.Title>
          <Card.Text>{item.data.description}</Card.Text>
          <Card.Text>${item.data.price}</Card.Text>
        </Card.Body>
        {cantCompra === 0 && (
          <ItemCount stock={item.data.amount} initial={1} onAdd={onAdd} />
        )}
        {cantCompra !== 0 && (
          <Button variant="success" as={Link} exact to={"/cart"}>
            Terminar compra{" "}
          </Button>
        )}
      </Card>
    </div>
  );
};

export default ItemDetail;
