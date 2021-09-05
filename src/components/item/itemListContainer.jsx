import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import productos from "../../helper/productos";
import { useParams } from "react-router";
import ItemList from "./itemList";

const listaProductos = new Promise((resolve) => {
  setTimeout(function () {
    resolve(productos);
  }, 2000);
});

const ItemListContainer = () => {
  const { category } = useParams();

  const [producto, setProducto] = useState({
    data: [],
  });

  useEffect(() => {
    listaProductos.then((data) => {
      if (category === undefined) {
        setProducto({
          data: data,
        });
      } else {
        setProducto({
          data: data.filter((producto) => producto.category === category),
        });
      }
    });
  }, [category]);

  return (
    <div>
      <Card>
        <Card.Body>
          <ItemList producto={producto} />
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemListContainer;
