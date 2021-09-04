import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>
          id:{id} {title}
        </Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${price}</p>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
