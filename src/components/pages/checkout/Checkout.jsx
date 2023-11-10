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
const Checkout = ({ handleChange, handleSubmit, provincias, errors }) => {
  return (
    <div className="container flex justify-center mt-10">
      <Card className="w-full items-center justify-center">
        <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="justify-center">
            <form
              className="w-full h-full flex flex-col gap-2 w-full justify-center text-center"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="flex gap-1">
                <div>
                  <Input
                    label="Nombre"
                    name="name"
                    containerProps={{ className: "min-w-[72px]" }}
                    onChange={handleChange}
                    error={errors.name ? true : false}
                  />
                  <Typography
                    variant="small"
                    color="red"
                    className="flex flex-col font-normal"
                  >
                    {errors.name}
                  </Typography>
                </div>
                <div>
                  <Input
                    label="Apellido"
                    name="lastName"
                    containerProps={{ className: "min-w-[72px]" }}
                    onChange={handleChange}
                    error={errors.lastName ? true : false}
                  />
                  <Typography
                    variant="small"
                    color="red"
                    className="flex flex-col font-normal"
                  >
                    {errors.lastName}
                  </Typography>
                </div>
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                error={errors.email ? true : false}
              />
              <Typography
                variant="small"
                color="red"
                className="flex font-normal"
              >
                {errors.email}
              </Typography>
              <Select
                id="province"
                name="province"
                label="Provincia"
                onChange={handleChange}
              >
                {provincias.map((provincia) => (
                  <Option key={provincia.id} value={provincia.nombre}>
                    <div className="text-left">{provincia.nombre}</div>
                  </Option>
                ))}
                ;
              </Select>
              <Input
                label="Ciudad"
                name="city"
                onChange={handleChange}
                error={errors.city ? true : false}
              />
              <Typography
                variant="small"
                color="red"
                className="flex font-normal"
              >
                {errors.city}
              </Typography>
              <Input
                label="Dirección"
                name="direction"
                onChange={handleChange}
                error={errors.direction ? true : false}
              />
              <Typography
                variant="small"
                color="red"
                className="flex font-normal"
              >
                {errors.direction}
              </Typography>
              <Button className="color-pinkLogo" type="submit">
                Comprar
              </Button>
            </form>
          </div>
          <div className=" flex flex-col gap-6">
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
