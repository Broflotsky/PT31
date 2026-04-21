"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/services/orders.services";
import Image from "next/image";

function CartPage() {
  const { cartItems, removeFromCart, getIdItems, clearCart } = useCart();
  const { dataUser } = useAuth();

  const handleCheckout = async () => {
    if (!dataUser?.token) {
      return;
    }
    try {
      await createOrder(getIdItems(), dataUser.token);
      clearCart();
    } catch (error) {
      console.error("Error en completar la compra", error);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-text sm:text-5xl">
        Carrito de compras
      </h1>
      <p className="mt-2 text-muted">
        Revisa los productos antes de continuar con tu compra.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems &&
            cartItems.map((item) => (
              <article
                suppressHydrationWarning
                key={item.id}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-shadow hover:shadow-md sm:gap-6 sm:p-6"
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-background sm:h-24 sm:w-24">
                  {/* <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  /> */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-text">{item.name}</h2>
                  <p className="mt-1 text-sm text-muted">
                    Cantidad: POR DESARROLLAR
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-accent">
                    {item.price}
                    {/* ${(item.price * item.quantity).toLocaleString("es-CO")} */}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-1 text-xs font-medium text-danger transition-colors hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-lg font-bold text-text">Resumen del pedido</h3>
            <div className="mt-4 space-y-3 border-b border-border pb-4">
              {cartItems &&
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-muted"
                  >
                    <span>POR DESARROLLAR</span>
                    <span>POR DESARROLLAR</span>
                  </div>
                ))}
              <div className="flex justify-between text-sm text-muted">
                <span>Envío</span>
                <span className="font-medium text-success">Gratis</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <span className="text-lg font-bold text-text">Total</span>
              <span className="text-lg font-bold text-accent">
                POR DESARROLLAR
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              Pagar
            </button>
            <Link
              href="/home"
              className="mt-3 block text-center text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
