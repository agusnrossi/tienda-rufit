import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartDetailList } from "./CartDetailList";
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap'

const Cart = () => {
  const { cart, clear, cartTotal } = useContext(CartContext);

  const listaCart = cart.length ? cart.map((data) => {
    return <CartDetailList data={data} />;
  })
    :
    <tr>
      <td colSpan={8}>Sin objetos en el carrito...

        <NavLink exact to={"/"}>
          <Button variant="dark">Volver al inicio</Button>
        </NavLink>
      </td>
    </tr>
    ;
  return (
    <div className="container">
      <h1 className="text-center mt-2">Terminar mi compra</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Título</th>
            <th className="text-center">Descripcion</th>
            <th className="text-center">Precio por unidad</th>
            <th className="text-center">Imagen</th>
            <th className="text-center">Cantidad Seleccionada</th>
            <th className="text-center">Total por Objeto</th>
            <th className="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {listaCart}
        </tbody>
      </table>
      {
        cart.length !== 0 && (
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="d-flex justify-content-around mt-3">
                <p className="text-center fw-bolder btn btn-dark">
                  Total de la Compra: $ {cartTotal}
                </p>
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="d-flex justify-content-around mt-3">
                <NavLink exact to={"/"}>
                  <Button variant="primary">
                    Seguir Comprando
                  </Button>
                </NavLink>
                <Button variant="danger" onClick={() => clear()}>
                  Vaciar carrito
                </Button>
                <NavLink exact to={"/checkout"}>
                  <Button variant="success">
                    Finalizar Compra
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cart;
