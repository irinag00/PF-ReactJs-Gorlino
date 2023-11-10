import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutCointainer = () => {
  const [provincias, setProvincias] = useState([]);
  useEffect(() => {
    fetch(
      "https://apis.datos.gob.ar/georef/api/provincias?orden=nombre&aplanar=true&campos=estandar&exacto=true"
    )
      .then((response) => response.json())
      .then((dataProvince) => setProvincias(dataProvince.provincias));
  }, []);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      province: "",
      city: "",
      direction: "",
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
      city: Yup.string("Solo se permiten caracteres alfabéticos")
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      direction: Yup.string()
        .required("El campo es obligatorio")
        .min(4, "Debe contener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
    }),
  });

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      provincias={provincias}
      errors={errors}
    />
  );
};

export default CheckoutCointainer;
