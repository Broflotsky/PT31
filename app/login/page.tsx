import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";

function LoginPage() {
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
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
          </div>
          <h1 className="font-display text-5xl text-text">Iniciar sesión</h1>
          <p className="mt-2 text-sm text-muted">
            Ingresa tus credenciales para acceder a tu cuenta.
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-muted">
          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary transition-colors hover:text-accent"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
