import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const CartContainer = () => {
  return (
    <div className="container flex-grow">
      <strong className="flex items-center justify-center mt-10">
        Estoy en el carrito
      </strong>
      <Link to="/checkout">
        <Button
          ripple={true}
          fullWidth={false}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 flex items-center justify-center"
        >
          Finalizar Compra
        </Button>
      </Link>
    </div>
  );
};

export default CartContainer;
