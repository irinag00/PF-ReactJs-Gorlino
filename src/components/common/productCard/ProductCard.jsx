import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CounterContainer from "../../common/counter/CounterContainer";
const ProductCard = ({ item }) => {
  return (
    <div className="group transition">
      <Card className=" w-90">
        <CardHeader shadow={false} floated={false} className="h-90">
          <img
            src={item.img}
            alt="card-image"
            className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 items-center text-center">
            <Typography className="text-2xl text-black">
              {item.title}
            </Typography>
            <Typography color="gray" className="font-bold text-lg">
              $ {item.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {item.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex mb-2 md:flex justify-between items-center">
          <CounterContainer stock={10} />
          <Button
            ripple={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Añadir al carrito
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
