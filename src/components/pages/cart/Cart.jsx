import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Cart = ({ cart }) => {
  return (
    <div className="container">
      <strong className="flex items-center justify-center mt-10">
        Estoy en el carrito
      </strong>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>cantidad: {product.quantity}</h3>
          </div>
        );
      })}
      <Link to="/checkout">
        <div className="flex items-center justify-center mt-5">
          <Button
            ripple={true}
            fullWidth={false}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 flex items-center justify-center"
          >
            Finalizar Compra
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
