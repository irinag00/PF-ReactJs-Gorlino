import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <AiOutlineShoppingCart />
      <span className="sr-only">Carrito</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-pinkLogo border-2 border-pinkLogo rounded-full -top-2 -right-2">
        0
      </div>
    </Link>
  );
};

export default CartWidget;
