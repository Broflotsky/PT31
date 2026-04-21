import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";

function RegisterPage() {
  return (
    <section className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
          </div>
          <h1 className="font-display text-5xl text-text">Crear cuenta</h1>
          <p className="mt-2 text-sm text-muted">
            Completa tus datos para registrarte.
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-sm text-muted">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary transition-colors hover:text-accent"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
