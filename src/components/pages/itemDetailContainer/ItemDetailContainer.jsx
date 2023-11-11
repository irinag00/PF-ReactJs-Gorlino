import { useState, useEffect, useContext } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  const navigate = useNavigate();
  let totalQuantity = getQuantityById(+id);
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
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "¡Producto agregado al carrito!",
    });

    //ahora navega al carrito
    addToCart(product);
    navigate("/cart");
  };
  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
