import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutCointainer = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const captureName = (event) => {
    setName(event.target.value);
  };
  console.log(name);
  return <Checkout captureName={captureName} />;
};

export default CheckoutCointainer;
