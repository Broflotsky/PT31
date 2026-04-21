//! 1- Determinar la interfaz de los valores de mi formulario, que son: email y password.
//! 2- Declarar los valores iniciales que va a tener mi formulario, osea, mi email y password.
//! 3- Esquema de validación construido con YUP.
import { ILoginFormValues } from "@/interfaces/login.interface";
import * as Yup from "yup";

export const loginInitialValues: ILoginFormValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronico invalido.")
    .required("El campo email es obligatorio."),
  password: Yup.string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres.")
    .required("El campo password es obligatorio."),
});
