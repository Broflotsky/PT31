"use client";
import { useAuth } from "@/context/AuthContext";
import { navLinks } from "@/helpers/navLinks.helper";
import Link from "next/link";

function Navbar() {
  const { dataUser } = useAuth();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
          <span className="font-display text-2xl tracking-wide text-text">
            TechStore
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {dataUser ? (
            <p suppressHydrationWarning>{dataUser.user?.name}</p>
          ) : (
            <div>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                Ingresar
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-linear-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
