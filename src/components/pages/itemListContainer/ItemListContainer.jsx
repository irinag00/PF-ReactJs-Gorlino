import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((resolve, reject) => {
      resolve(categoryName ? filterProducts : products);
    });
    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoryName]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
