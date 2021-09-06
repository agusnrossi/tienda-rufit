import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Button variant="danger">
        <MdShoppingCart />
        <p>{cart.length !== 0 && cart.length}</p>
      </Button>
    </>
  );
};

export default CartWidget;
