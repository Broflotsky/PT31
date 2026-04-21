import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-border bg-text text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <span className="font-display text-xl tracking-wide">
                TechStore
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Tu tienda de confianza para productos electrónicos de alta
              calidad.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/home"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Cuenta
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/login"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Registrarse
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Mi cuenta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-white/60">soporte@techstore.com</li>
              <li className="text-sm text-white/60">+57 310 820 2020</li>
              <li className="text-sm text-white/60">Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} TechStore. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
