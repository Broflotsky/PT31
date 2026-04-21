"use client";
import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./loginSchema";
import { loginUser } from "@/services/auth.services";
import { useAuth } from "@/context/AuthContext";

function LoginForm() {
  const { setDataUser } = useAuth();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const responseLogin = await loginUser(values);
      console.log(responseLogin);
      setDataUser(responseLogin);
    },
  });

  // MI LOGIN LLAMA AL BACK, EL BACK ME RETORNA LA INFORMACIÓN DEL USUARIO ===== ENVIARLA A MI CONTEXT PARA QUE ALMECENE EN LOCALSTORAGE

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-surface p-8 shadow-lg"
    >
      <div className="space-y-1.5">
        <label htmlFor="login-email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="login-email"
          type="email"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="tu@email.com"
        />
        {formik.errors.email ? (
          <p className="text-xs text-danger">{formik.errors.email}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="login-password"
          className="text-sm font-medium text-text"
        >
          Contraseña
        </label>
        <input
          id="login-password"
          type="password"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="••••••••"
        />
        {formik.errors.password ? (
          <p className="text-xs text-danger">{formik.errors.password}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>
    </form>
  );
}

export default LoginForm;
