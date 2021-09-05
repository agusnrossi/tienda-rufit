import React, { useEffect, useState } from "react";
import ItemDetail from "../item/ItemDetail";
import productos from "../../helper/productos";
import { useParams } from "react-router";

const getItem = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({
    data: {},
  });

  useEffect(() => {
    getItem.then((data) => {
      setItem({
        data: data.find((producto) => producto.id === parseInt(id)),
      });
    });
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
