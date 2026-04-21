import Link from "next/link";

function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-text via-accent to-primary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0VjZoLThWMGgtNHY2aC04djRoLTR2OGgtNHY0aDR2OGg0djhoNHYtOGg4di00aDR2LThoNHYtNGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Envío gratis en compras +$200.000
            </span>
            <h1 className="mt-6 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Tecnología que
              <br />
              <span className="bg-linear-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                transforma
              </span>
              <br />
              tu mundo
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              Descubre los mejores productos electrónicos con garantía,
              financiación y envío a todo el país.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/home"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-text shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver productos
              </Link>
              <Link
                href="/register"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="border-b border-border bg-surface py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
              ),
              title: "Pago seguro",
              desc: "Todas las transacciones son cifradas y seguras",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /><circle cx="12" cy="12" r="10" /></svg>
              ),
              title: "Envío gratis",
              desc: "En compras superiores a $200.000 COP",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
              ),
              title: "Garantía",
              desc: "Todos nuestros productos cuentan con garantía",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              ),
              title: "Soporte 24/7",
              desc: "Atención al cliente todos los días del año",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-4xl text-text sm:text-5xl">
              Explora por categoría
            </h2>
            <p className="mt-3 text-muted">
              Encuentra exactamente lo que buscas
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Audio",
                desc: "Auriculares, parlantes y más",
                img: "https://picsum.photos/seed/audio-cat/600/400",
              },
              {
                name: "Periféricos",
                desc: "Mouse, teclados y accesorios",
                img: "https://picsum.photos/seed/peripherals/600/400",
              },
              {
                name: "Monitores",
                desc: "Pantallas de alta resolución",
                img: "https://picsum.photos/seed/monitors/600/400",
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/home"
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-3/2 w-full">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-primary to-accent py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            ¿Listo para empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Crea tu cuenta hoy y accede a ofertas exclusivas, seguimiento de
            pedidos y mucho más.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
