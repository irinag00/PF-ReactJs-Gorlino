import {
  Card,
  CardBody,
  Button,
  Input,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
const Checkout = ({ captureName }) => {
  return (
    <div className="container flex justify-center mt-10">
      <Card className="w-full max-w-[60rem] items-center">
        {/* <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center px-4 py-8 text-center"
        >
          <Typography variant="h5" color="white">
            Material Tailwind PRO
          </Typography>
        </CardHeader> */}
        <CardBody className="grid grid-cols-2 gap-8">
          <div className="">
            <form className=" flex flex-col gap-6 w-80" action="">
              <Input label="Nombre" name="name" onChange={captureName} />
              <Input label="Apellido" name="lastName" />
              <Input label="Username" />
              <Button type="submit">Comprar</Button>
            </form>
          </div>
          <div className="flex flex-col gap-6 w-20 items-end"> hola </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Checkout;
