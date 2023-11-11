import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CheckoutCointainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      province: "",
      city: "",
      direction: "",
      postcode: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnChange: false,

    validationSchema: Yup.object({
      name: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      lastName: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      email: Yup.string()
        .email("El email no parece ser válido.")
        .required("El campo es obligatorio"),
      province: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      city: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      direction: Yup.string()
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      postcode: Yup.string()
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres"),
    }),
  });

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      cart={cart}
      total={total}
    />
  );
};

export default CheckoutCointainer;
