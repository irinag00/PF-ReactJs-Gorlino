import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutCointainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    // province: "",
    direction: "",
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };
  return <Checkout handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default CheckoutCointainer;
