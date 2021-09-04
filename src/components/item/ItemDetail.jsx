import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../counter/itemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem", padding: "10px" }}>
        <img src={item.data.pictureUrl} className="card-img-top" alt="" />
        <img
          src={item.data.pictureUrl}
          alt={item.data.description}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title>{item.data.title}</Card.Title>
          <Card.Text>{item.data.description}</Card.Text>
          <Card.Text>{item.data.price}</Card.Text>
        </Card.Body>
        <ItemCount stock={item.data.amount} initial={1} />
      </Card>
    </div>
  );
};

export default ItemDetail;
