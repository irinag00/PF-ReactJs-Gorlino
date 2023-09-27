//rafce para importacion por defecto
//rafc para importacion por nombre
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0); // [variable, funcion]
  const sumar = () => {
    setCounter(counter + 1);
  };

  return <div>Home</div>;
};

export default Home;
