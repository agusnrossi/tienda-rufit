import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./itemList";
import { getFirestore } from "../../firebase/firebase";

const ItemListContainer = () => {
  const { category } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let itemCollection;

    if (category) {
      itemCollection = db
        .collection("item")
        .where("categoryName", "==", `${category}`);
    } else {
      itemCollection = db.collection("item");
    }

    const itemCollectionQuery = itemCollection.get();
    itemCollectionQuery
      .then((querySnapshot) => {
        let documento = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducto(documento);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [category]);

  return (
    <div>
      <ItemList producto={producto} />
    </div>
  );
};

export default ItemListContainer;
