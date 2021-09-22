import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

export const CartDetailList = ({ data }) => {
  const { item, cantCompra } = data;

  const { removeItem } = useContext(CartContext);

  let precioTotalPorObjeto = item.price * cantCompra;

  return (
    <>
      <tr key={item.id} style={{ backgroundColor: "#fff" }}>
        <td className="align-middle text-center fw-bold">{item.id}</td>
        <td className="align-middle text-center fw-bold">{item.title}</td>
        <td className="align-middle text-center fw-bold">{item.description}</td>
        <td className="align-middle text-center fw-bold"> $ {item.price}</td>
        <td className="align-middle text-center">
          <img
            alt=""
            src={item.pictureUrl}
            style={{ width: "200px" }}
            className="border border-dark rounded"
          />
        </td>
        <td className="align-middle text-center fw-bold">{cantCompra}</td>
        <td className="align-middle text-center fw-bold">
          $ {precioTotalPorObjeto}
        </td>
        <td className="align-middle text-center fw-bold">
          <Button
            variant="danger"
            onClick={() => {
              removeItem(item.id);
            }}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};
