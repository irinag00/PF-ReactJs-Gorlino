import { IoMdAdd, IoMdRemove } from "react-icons/io";
const Counter = ({ sumar, restar, counter }) => {
  return (
    <div className=" flex flex-1 max-w-[100px] items-center h full border text-primary font-medium">
      <div
        className="flex-1 h-full flex justify-center items-center cursor-pointer"
        onClick={restar}
      >
        <IoMdRemove />
      </div>
      <div className="h-full flex justify-center items-center px-2">
        {counter}
      </div>
      <div
        className=" flex-1 h-full flex justify-center items-center cursor-pointer"
        onClick={sumar}
      >
        <IoMdAdd />
      </div>
    </div>
  );
};

export default Counter;
