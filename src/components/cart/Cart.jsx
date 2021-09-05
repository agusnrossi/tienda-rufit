import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartDetailList } from "./CartDetailList";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const listaCart = cart.length ? (
    cart.map((data) => {
      console.log("EN CARRITO", cart);
      return <CartDetailList data={data} />;
    })
  ) : (
    <tr>
      <td colSpan={6}>Carrito vacio</td>
    </tr>
  );
  return (
    <div className="Container">
      <h1 className="text-center mt-2">Terminar mi compra</h1>
      <div className="container">
        <h1 className="text-center mt-2">Terminar mi compra</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Título</th>
              <th className="text-center">Descripcion</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Imagen</th>
              <th className="text-center">Cantidad Seleccionada</th>
              <th className="text-center">Total por Objeto</th>
              <th className="text-center">Acción</th>
            </tr>
          </thead>
          <tbody>{listaCart}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
