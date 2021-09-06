import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

export const CartDetailList = ({ data }) => {
  const { item, cantCompra } = data;

  const { removeItem } = useContext(CartContext);

  let precioTotalPorObjeto = item.data.price * cantCompra;

  return (
    <>
      <tr key={item.data.id}>
        <td className="align-middle text-center fw-bold">{item.data.id}</td>
        <td className="align-middle text-center fw-bold">{item.data.title}</td>
        <td className="align-middle text-center fw-bold">
          {item.data.description}
        </td>
        <td className="align-middle text-center fw-bold">
          {" "}
          $ {item.data.price}
        </td>
        <td className="align-middle text-center">
          <img
            alt=""
            src={item.data.pictureUrl}
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
            variant="primary"
            onClick={() => {
              removeItem(item.data.id);
            }}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};
