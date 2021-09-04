import React from "react";
import { Button } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <>
      <Button variant="danger">
        <MdShoppingCart />
      </Button>
    </>
  );
};

export default CartWidget;
