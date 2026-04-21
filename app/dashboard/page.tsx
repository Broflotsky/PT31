"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

function DashboardPage() {
  const { dataUser } = useAuth();
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl text-text sm:text-5xl">
            Mi cuenta
          </h1>
          <p className="mt-2 text-muted">
            Gestiona tu perfil, pedidos y preferencias.
          </p>
        </div>
        <Link
          href="/home"
          className="rounded-xl bg-linear-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
        >
          Ir a comprar
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-text">Datos personales</h2>
          <p className="mt-2 text-sm text-muted">
            Nombre, email y dirección de envío.
          </p>
          <div className="mt-4 space-y-2 rounded-xl bg-background p-3">
            {dataUser && (
              <>
                <p className="text-sm text-muted">
                  <span
                    suppressHydrationWarning
                    className="font-medium text-text"
                  >
                    Nombre:
                  </span>{" "}
                  {dataUser?.user?.name}
                </p>
                <p className="text-sm text-muted">
                  <span
                    suppressHydrationWarning
                    className="font-medium text-text"
                  >
                    Email:
                  </span>{" "}
                  {dataUser?.user?.email}
                </p>
                <p className="text-sm text-muted">
                  <span
                    suppressHydrationWarning
                    className="font-medium text-text"
                  >
                    Dirección:
                  </span>{" "}
                  {dataUser?.user?.address}
                </p>
              </>
            )}
          </div>
        </article>

        <article className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success transition-colors group-hover:bg-success group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <h2 className="text-lg font-bold text-text">Mis pedidos</h2>
          <p className="mt-2 text-sm text-muted">
            Últimas órdenes y estado de envío.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-xl bg-background p-3">
              <span className="text-sm font-medium text-text">Orden #1042</span>
              <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
                Entregado
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-background p-3">
              <span className="text-sm font-medium text-text">Orden #1098</span>
              <span className="rounded-full bg-warning/10 px-2.5 py-0.5 text-xs font-semibold text-warning">
                En camino
              </span>
            </div>
          </div>
        </article>

        <article className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-text">Preferencias</h2>
          <p className="mt-2 text-sm text-muted">
            Configuraciones de tu cuenta y notificaciones.
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-background p-3">
              <span className="text-sm text-text">Notificaciones email</span>
              <div className="h-5 w-9 rounded-full bg-primary p-0.5">
                <div className="h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-background p-3">
              <span className="text-sm text-text">Ofertas especiales</span>
              <div className="h-5 w-9 rounded-full bg-primary p-0.5">
                <div className="h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DashboardPage;
