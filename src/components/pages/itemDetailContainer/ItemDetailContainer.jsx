import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState([]);
  const id = 3;
  let producto = products.find((product) => product.id === id);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProducts
      .then((res) => setProductSelected(res))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(productSelected);
  return <ItemDetail productSelected={productSelected} />;
};

export default ItemDetailContainer;
