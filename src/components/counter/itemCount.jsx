import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsDash, BsPlus } from "react-icons/bs";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  return (
    <div>
      <h3>{counter}</h3>
      <Button
        className="gap-3"
        variant="danger"
        onClick={() => {
          if (counter < stock) {
            setCounter(counter + 1);
          }
        }}
      >
        <BsPlus />
      </Button>{" "}
      <Button
        variant="danger"
        onClick={() => {
          if (counter > initial) {
            setCounter(counter - 1);
          }
        }}
      >
        <BsDash />
      </Button>
      <div className="mt-3">
        {""}
        <Button variant="outline-primary" onClick={onAdd}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
