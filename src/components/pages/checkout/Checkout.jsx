import {
  Card,
  CardBody,
  Button,
  Input,
  CardHeader,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
const Checkout = ({ handleChange, handleSubmit }) => {
  return (
    <div className="container flex justify-center mt-10">
      <Card className="w-full max-w-[60rem] items-center justify-center">
        <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="justify-center">
            <form
              className=" flex flex-col gap-6 md:w-80 w-full justify-center text-center"
              action=""
              onSubmit={handleSubmit}
            >
              <Input label="Nombre" name="name" onChange={handleChange} />
              <Input label="Apellido" name="lastName" onChange={handleChange} />
              <Input
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
              />
              {/* <Select label="Provincia" name="province" onChange={handleChange}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select> */}
              <Input
                label="Dirección"
                name="direction"
                onChange={handleChange}
              />
              <Button className="color-pinkLogo" type="submit">
                Comprar
              </Button>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <Typography variant="h3" className="text-pinkLogo">
              Resumen de compra
            </Typography>
            <div className="border-t border-blue-gray-50 py-2 ">
              <div className="flex justify-between">
                <Typography variant="h5">Producto</Typography>
                <Typography className="text-end items-end order-last">
                  $5000
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Envío</Typography>
                <Typography className="text-end items-end order-last">
                  $1200
                </Typography>
              </div>
            </div>
            <div className="border-t border-blue-gray-50 py-2 ">
              <div className="flex justify-between">
                <Typography variant="h5">Total</Typography>
                <Typography
                  variant="h5"
                  className="text-end items-end order-last"
                >
                  $6200
                </Typography>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Checkout;
