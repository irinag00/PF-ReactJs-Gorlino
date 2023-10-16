import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);
    const getProducts = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProducts
      .then((res) => setProductSelected(res))
      .catch((error) => console.log(error));
  }, [id]);
  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log("producto agregado al carrito", obj);
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
