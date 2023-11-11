import { useState, useEffect, useContext } from "react";
import SkeletonComponent from "../../common/skeleton/SkeletonComponent";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  const navigate = useNavigate();

  let totalQuantity = getQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let productDoc = doc(productsCollection, id);

    getDoc(productDoc)
      .then((response) => {
        setProductSelected({ id: response.id, ...response.data() });
      })
      .finally(() => {
        setIsLoading(false); // Indicar que la carga ha terminado
      });
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
    <>
      {isLoading ? (
        <div className="container animate-pulse">
          {[...Array(1)].map((_, index) => (
            <SkeletonComponent index={index} />
          ))}
          ;
        </div>
      ) : (
        <>
          <ItemDetail
            productSelected={productSelected}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        </>
      )}
    </>
    // <ItemDetail
    //   productSelected={productSelected}
    //   onAdd={onAdd}
    //   initial={totalQuantity}
    // />
  );
};

export default ItemDetailContainer;
