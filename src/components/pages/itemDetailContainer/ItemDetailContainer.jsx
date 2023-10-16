import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState([]);
  const { id } = useParams();
  let producto = products.find((product) => product.id === +id);
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
