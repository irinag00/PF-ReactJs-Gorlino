import { Button } from "@material-tailwind/react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
const Counter = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div className="flex flex-col jusfity-center content-center">
      <div className="flex  max-w-[100px] items-center h full border text-primary font-medium mb-4">
        <div
          className="flex-1 h-full flex justify-center items-center cursor-pointer px-2"
          onClick={restar}
        >
          <button>
            <IoMdRemove />
          </button>
        </div>
        <div className="h-full flex justify-center items-center px-2">
          {counter}
        </div>
        <div
          className=" flex-1 h-full flex justify-center items-center cursor-pointer px-2"
          onClick={sumar}
        >
          <button>
            <IoMdAdd />
          </button>
        </div>
      </div>
      <Button
        ripple={true}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-full lg:max-w-[200px]"
        onClick={() => onAdd(counter)}
      >
        Añadir al carrito
      </Button>
    </div>
  );
};

export default Counter;
