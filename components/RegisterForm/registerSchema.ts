//  email,
//   password,
//   name,
//   address,
//   phone,

//! 2- Construir nuestro registerSchema (Interfaz, valores iniciales, schema de validación)
import { IRegisterFormValues } from "@/interfaces/register.interface";
import * as Yup from "yup";

export const registerInitialValues: IRegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};

export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronico invalido.")
    .required("El campo email es obligatorio."),
  password: Yup.string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres.")
    .required("El campo password es obligatorio."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required("Este campo es obligatorio."),
  name: Yup.string().required("Este campo es obligatorio."),
  address: Yup.string().required("Este campo es obligatorio."),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "El telefono solo debe contener números.")
    .required("Este campo es obligatorio."),
});
