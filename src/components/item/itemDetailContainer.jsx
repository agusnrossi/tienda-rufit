import React, { useEffect, useState } from "react";
import ItemDetail from "../item/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({
    data: {},
  });

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("item");
    const itemById = itemCollection.doc(id);

    itemById.get().then((querySnapshot) => {
        if (Object.keys(querySnapshot).length === 0) {
          console.log("No results!");
        }
        setItem(querySnapshot.data());
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
