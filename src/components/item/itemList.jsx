import React, { useState, useEffect } from "react";
import productos from "../../helper/productos";
import Item from "./item";

const ItemList = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const getDatos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    getDatos.then((data) => {
      setProducto(data);
    });
  }, [producto]);

  const listaItems = producto.length ? (
    producto.map((data) => {
      return <Item data={data} key={data.id} />;
    })
  ) : (
    <tr>
      <td colSpan={6}>Loading...</td>
    </tr>
  );

  return (
    <div className="container my-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Titulo</th>
            <th className="text-center">Descripcion</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Imagen</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>{listaItems}</tbody>
      </table>
    </div>
  );
};

export default ItemList;
