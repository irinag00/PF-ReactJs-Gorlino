import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1); // [variable, funcion]
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("cantidad maxima");
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <Counter sumar={sumar} restar={restar} counter={counter} onAdd={onAdd} />
  );
};
export default CounterContainer;
