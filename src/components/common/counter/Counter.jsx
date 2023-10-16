import { Button } from "@material-tailwind/react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
const Counter = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div>
      <div className=" flex flex-1 max-w-[100px] items-center h full border text-primary font-medium mb-4">
        <div
          className="flex-1 h-full flex justify-center items-center cursor-pointer"
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
          className=" flex-1 h-full flex justify-center items-center cursor-pointer"
          onClick={sumar}
        >
          <button>
            <IoMdAdd />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center lg:justify-start mt-6">
        <Button
          ripple={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-full lg:max-w-[200px]"
          onClick={() => onAdd(counter)}
        >
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
