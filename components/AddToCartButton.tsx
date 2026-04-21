"use client";

import { useCart } from "@/context/CartContext";
import { IProduct } from "@/interfaces/product.interface";

interface AddToCartButtonProps {
  product: IProduct;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex-1 cursor-pointer rounded-xl bg-linear-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 sm:flex-none"
    >
      Agregar al carrito
    </button>
  );
}

export default AddToCartButton;
