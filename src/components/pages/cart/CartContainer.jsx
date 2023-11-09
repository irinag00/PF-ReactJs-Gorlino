import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  return <Cart cart={cart} clearCart={clearCart} />;
};

export default CartContainer;
