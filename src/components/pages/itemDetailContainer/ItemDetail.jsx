import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CounterContainer from "../../common/counter/CounterContainer";
const ItemDetail = ({ productSelected }) => {
  return (
    <section className="pt-32 pb-12 lg-py-32 h-screen flex items-center">
      <div className="container mb-2 mt-2">
        <Card className="flex flex-col lg:flex-row w-full items-center ">
          <CardHeader
            shadow={true}
            floated={false}
            className="m-0 lg:rounded-r-none"
          >
            <img
              src={productSelected.img}
              alt="card-image"
              className="h-full w-full object-cover lg:max-w-[500px]"
            />
          </CardHeader>
          <CardBody className="flex-1 text-center lg:text-left">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {productSelected.title}
            </Typography>
            <Typography color="gray" className="font-bold text-lg mb-4">
              $ {productSelected.price}
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              {productSelected.description}
            </Typography>
            <div className="flex justify-center lg:justify-start">
              <CounterContainer stock={10} />
            </div>
            <div className="flex flex-row items-center gap-2 justify-center lg:justify-start mt-5">
              <Button
                ripple={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-full lg:max-w-[200px]"
              >
                Añadir al carrito
              </Button>
              {/* <Button
                ripple={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Comprar
              </Button> */}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default ItemDetail;
