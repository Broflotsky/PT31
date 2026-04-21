"use client";

import { useFormik } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
} from "./registerSchema";
import { registerUser } from "@/services/auth.services";

function RegisterForm() {
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      await registerUser(values);
      resetForm();
    },
  });

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-surface p-8 shadow-lg"
    >
      <div className="space-y-1.5">
        <label htmlFor="reg-email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="reg-email"
          type="email"
          className={inputClass}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="tu@email.com"
        />
        {formik.errors.email ? (
          <p className="text-xs text-danger">{formik.errors.email}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="reg-password"
            className="text-sm font-medium text-text"
          >
            Contraseña
          </label>
          <input
            id="reg-password"
            type="password"
            className={inputClass}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="••••••"
          />
          {formik.errors.password ? (
            <p className="text-xs text-danger">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="reg-confirm"
            className="text-sm font-medium text-text"
          >
            Confirmar contraseña
          </label>
          <input
            id="reg-confirm"
            type="password"
            className={inputClass}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="••••••"
          />
          {formik.errors.confirmPassword ? (
            <p className="text-xs text-danger">
              {formik.errors.confirmPassword}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="reg-name" className="text-sm font-medium text-text">
          Nombre completo
        </label>
        <input
          id="reg-name"
          type="text"
          className={inputClass}
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Tu nombre completo"
        />
        {formik.errors.name ? (
          <p className="text-xs text-danger">{formik.errors.name}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="reg-address" className="text-sm font-medium text-text">
          Dirección
        </label>
        <input
          id="reg-address"
          type="text"
          className={inputClass}
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          placeholder="Tu dirección"
        />
        {formik.errors.address ? (
          <p className="text-xs text-danger">{formik.errors.address}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="reg-phone" className="text-sm font-medium text-text">
          Teléfono
        </label>
        <input
          id="reg-phone"
          type="text"
          className={inputClass}
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="3108202020"
        />
        {formik.errors.phone ? (
          <p className="text-xs text-danger">{formik.errors.phone}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Registrándote..." : "Crear cuenta"}
      </button>
    </form>
  );
}

export default RegisterForm;
