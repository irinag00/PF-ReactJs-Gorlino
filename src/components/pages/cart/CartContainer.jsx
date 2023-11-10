import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteProductById={deleteProductById}
      total={total}
    />
  );
};

export default CartContainer;
