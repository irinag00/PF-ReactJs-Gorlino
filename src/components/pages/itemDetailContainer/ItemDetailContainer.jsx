import { useState, useEffect, useContext } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  const navigate = useNavigate();
  let totalQuantity = getQuantityById(productSelected.id);
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
    let product = {
      ...productSelected,
      quantity: cantidad,
    };
    //ahora navega al carrito
    addToCart(product);
    navigate("/cart");
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
