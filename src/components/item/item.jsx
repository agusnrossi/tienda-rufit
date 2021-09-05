import { Button } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ data }) => {
  const { id, title, description, price, pictureUrl } = data;

  return (
    <>
      <tr key={id}>
        <td className="align-middle text-center">{id}</td>
        <td className="align-middle text-center">{title}</td>
        <td className="align-middle text-center">{description}</td>
        <td className="align-middle text-center"> $ {price}</td>
        <td className="align-middle text-center">
          <img
            src={pictureUrl}
            style={{ width: "200px" }}
            className="border border-dark rounded"
            alt=""
          />
        </td>
        <td className="align-middle text-center">
          <NavLink exact to={`../item/${id}`}>
            <Button type="button" className="btn btn-primary">
              Ver producto
            </Button>
          </NavLink>
        </td>
      </tr>
    </>
  );
};

export default Item;
