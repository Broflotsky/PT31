import CardContainer from "@/components/CardContainer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Principal */}
      <section className="relative overflow-hidden bg-linear-to-br from-text via-accent to-primary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0VjZoLThWMGgtNHY2aC04djRoLTR2OGgtNHY0aDR2OGg0djhoNHYtOGg4di00aDR2LThoNHYtNGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              🚀 Envío gratis en compras +$200.000
            </span>
            <h1 className="mt-6 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              La mejor tecnología
              <br />
              <span className="bg-linear-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                al alcance de tu mano
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Descubre productos electrónicos de última generación con garantía
              oficial, precios competitivos y atención personalizada.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/home"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-text shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver catálogo completo
              </Link>
              <Link
                href="#testimonios"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Ver opiniones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="border-b border-border bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {[
              { number: "15K+", label: "Clientes satisfechos" },
              { number: "98%", label: "Valoración positiva" },
              { number: "24/7", label: "Soporte técnico" },
              { number: "500+", label: "Productos disponibles" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl text-primary sm:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-medium text-muted sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-4xl text-text sm:text-5xl">
              ¿Por qué TechStore?
            </h2>
            <p className="mt-3 text-lg text-muted">
              Miles de clientes confían en nosotros cada día
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                ),
                title: "Garantía oficial",
                desc: "Todos nuestros productos cuentan con garantía del fabricante y soporte técnico especializado.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                ),
                title: "Envíos rápidos",
                desc: "Entrega express en 24-48h en las principales ciudades. Seguimiento en tiempo real.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                ),
                title: "Pago seguro",
                desc: "Múltiples métodos de pago con encriptación SSL. Tus datos siempre protegidos.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                ),
                title: "Productos originales",
                desc: "Importamos directamente de los fabricantes. 100% autenticidad garantizada.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                title: "Atención personalizada",
                desc: "Equipo de expertos disponible para asesorarte en tu compra. Chat, email y teléfono.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "Calidad verificada",
                desc: "Proceso de control de calidad riguroso. Solo vendemos lo mejor del mercado.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="font-display text-4xl text-text sm:text-5xl">
                Productos más vendidos
              </h2>
              <p className="mt-2 text-muted">
                Los favoritos de nuestros clientes
              </p>
            </div>
            <Link
              href="/home"
              className="rounded-xl border border-border bg-surface px-6 py-2.5 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
            >
              Ver todo el catálogo →
            </Link>
          </div>
          <div className="mt-10">
            <CardContainer />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-4xl text-text sm:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mt-3 text-lg text-muted">
              Miles de opiniones verificadas nos respaldan
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "María González",
                role: "Diseñadora Gráfica",
                avatar: "MG",
                rating: 5,
                text: "Excelente servicio. Compré un monitor y llegó en perfectas condiciones en menos de 24h. El precio fue el mejor que encontré y la atención al cliente fue impecable.",
              },
              {
                name: "Carlos Ramírez",
                role: "Desarrollador",
                avatar: "CR",
                rating: 5,
                text: "Llevo 3 años comprando aquí y nunca me han fallado. Productos originales, buenos precios y el soporte técnico realmente sabe lo que hace. 100% recomendado.",
              },
              {
                name: "Ana Martínez",
                role: "Estudiante",
                avatar: "AM",
                rating: 5,
                text: "Me asesoraron perfectamente para elegir mis auriculares. La calidad es increíble y el precio fue muy accesible con las facilidades de pago. Volveré a comprar.",
              },
              {
                name: "Jorge López",
                role: "Gamer",
                avatar: "JL",
                rating: 5,
                text: "Armé mi setup completo con ellos. Teclado, mouse, monitor... todo de primera calidad. La experiencia de compra fue súper fluida y el envío muy rápido.",
              },
              {
                name: "Laura Sánchez",
                role: "Arquitecta",
                avatar: "LS",
                rating: 5,
                text: "Compré una laptop para el trabajo y superó mis expectativas. El equipo llegó bien empacado, configurado y listo para usar. Servicio post-venta excelente.",
              },
              {
                name: "Pedro Morales",
                role: "Fotógrafo",
                avatar: "PM",
                rating: 5,
                text: "La mejor tienda de tecnología en Colombia. Precios justos, productos originales y un servicio al cliente que realmente se preocupa por ti. ¡Gracias!",
              },
            ].map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-warning text-warning"
                      viewBox="0 0 24 24"
                      strokeWidth="0"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-text">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted">
              Confían en nosotros
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale sm:gap-12">
            {[
              "VISA",
              "MASTERCARD",
              "PSE",
              "EFECTY",
              "NEQUI",
              "BANCOLOMBIA",
            ].map((brand) => (
              <div
                key={brand}
                className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-bold text-muted"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-linear-to-r from-primary to-accent py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            ¿Listo para empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Crea tu cuenta hoy y recibe un 10% de descuento en tu primera
            compra. Además, accede a ofertas exclusivas y promociones
            especiales.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-accent shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/home"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explorar productos
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Sin cargo de membresía · Cancela cuando quieras · Envíos gratis
          </p>
        </div>
      </section>
    </div>
  );
}
