import React from "react";
import Item from "./item";

function addItem({ id, price, title, pictureUrl }) {
  return <Item id={id} title={title} price={price} pictureUrl={pictureUrl} />;
}

const ItemList = ({ items }) => {
  return <div className="d-inline-flex">{items.map(addItem)}</div>;
};

export default ItemList;
