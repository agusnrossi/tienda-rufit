import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartDetailList } from "./CartDetailList";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cart, clear, cartTotal } = useContext(CartContext);

  const listaCart = cart.length ? (
    cart.map((data) => {
      return <CartDetailList data={data} />;
    })
  ) : (
    <tr>
      <td colSpan={6}>Carrito vacio</td>
      <NavLink exact to={"/"}>
        <Button variant="danger">volver</Button>
      </NavLink>
    </tr>
  );
  return (
    <div className="Container">
      <h1 className="text-center mt-2">Terminar mi compra</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">Título</th>
            <th className="text-center">Descripcion</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Imagen</th>
            <th className="text-center">Precio por unidad</th>
            <th className="text-center">Cantidad Seleccionada</th>
            <th className="text-center">Total por Objeto</th>
            <th className="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>{listaCart}</tbody>
      </table>
      {cart.length !== 0 && (
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <p>{cartTotal.toString()}</p>
            <div className="d-flex justify-content-around mt-3">
              <NavLink className="btn btn-primary" exact to={"/"}>
                Seguir Comprando
              </NavLink>
              <Button className="btn btn-danger" onClick={() => clear()}>
                Vaciar carrito
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
