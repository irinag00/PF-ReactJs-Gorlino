import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);
  // console.log(items);
  return <ItemList items={items} />;
};

export default ItemListContainer;
