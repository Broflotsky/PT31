import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-50">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.stock <= 10 && (
            <span className="absolute top-3 left-3 rounded-full bg-warning/90 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
              Pocas unidades
            </span>
          )}
        </div>

        <div className="p-5">
          <h2 className="text-lg font-bold text-text line-clamp-1">
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-muted line-clamp-2">
            {product.description}
          </p>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-accent">
                ${product.price.toLocaleString("es-CO")}
              </p>
              <p className="mt-0.5 text-xs text-muted">
                {product.stock} en stock
              </p>
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Card;
