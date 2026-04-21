import AddToCartButton from "@/components/AddToCartButton";
import { IProduct } from "@/interfaces/product.interface";
import { getProductById } from "@/services/products.services";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductPageByIdProps {
  params: {
    id: string;
  };
}

async function ProductPageById({ params }: ProductPageByIdProps) {
  const { id } = await params;
  let product: IProduct;
  try {
    product = await getProductById(id);
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/home"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Volver a productos
      </Link>

      <article className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square bg-linear-to-br from-slate-100 to-slate-50 p-8">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Producto #{id}
            </span>

            <h1 className="mt-4 font-display text-4xl text-text sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-muted">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-accent">
                ${product.price.toLocaleString("es-CO")}
              </span>
              <span className="text-sm text-muted">COP</span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div
                className={`h-2.5 w-2.5 rounded-full ${product.stock > 10 ? "bg-success" : product.stock > 0 ? "bg-warning" : "bg-danger"}`}
              />
              <span className="text-sm text-muted">
                {product.stock > 10
                  ? `${product.stock} unidades disponibles`
                  : product.stock > 0
                    ? `Últimas ${product.stock} unidades`
                    : "Sin stock"}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCartButton product={product} />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-background p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
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
                <span className="text-xs text-muted">Pago seguro</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-background p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <span className="text-xs text-muted">Con garantía</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductPageById;
