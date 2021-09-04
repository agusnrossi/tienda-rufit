import React, { useEffect, useState } from "react";
import { ItemDetail } from "../Item/ItemDetail";

const producto = {
  id: 1,
  title: "Remera Rufit Azul",
  description: "Remera de Rufian hombre",
  category: "Remeras",
  price: 900,
  pictureUrl: "https://www.rufit.com.ar/media/productos/a_f9bUcDP.jpg",
  amount: 10,
};
const getItem = new Promise((resolve) => {
  setTimeout(() => {
    resolve(producto);
  }, 2000);
});

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem.then((data) => {
      setItem({
        data: data,
      });
    });
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};
