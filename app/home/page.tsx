import CardContainer from "@/components/CardContainer";

function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-4xl text-text sm:text-5xl">
          Nuestros Productos
        </h1>
        <p className="mt-2 text-muted">
          Explora nuestra selección de productos electrónicos de alta calidad.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3">
        {["Todos", "Audio", "Periféricos", "Monitores"].map((cat) => (
          <button
            key={cat}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              cat === "Todos"
                ? "bg-primary text-white shadow-sm"
                : "border border-border bg-surface text-muted hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <CardContainer />
    </div>
  );
}

export default HomePage;
