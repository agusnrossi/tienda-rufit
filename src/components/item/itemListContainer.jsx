import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../counter/itemCount";
import ItemList from "./itemList";

const productos = [
  {
    id: 1,
    title: "Remera Rufit Azul",
    description: "Remera de Rufian hombre",
    category: "Remeras",
    price: 900,
    pictureUrl: "https://www.rufit.com.ar/media/productos/a_f9bUcDP.jpg",
    amount: 10,
  },
];

const ItemListContainer = (item) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      setItems(productos);
    }, 2000);
  }, []);

  return (
    <div>
      <Card>
        <Card.Body>
          <ItemList item={items} />
          <ItemCount stock={5} initial={1} />
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemListContainer;
