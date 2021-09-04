import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../counter/itemCount";

const ItemListContainer = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <p>{props.greeting}</p>
          <ItemCount stock={5} initial={1} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemListContainer;
