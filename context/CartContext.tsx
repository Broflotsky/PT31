"use client";

import { IProduct } from "@/interfaces/product.interface";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface CartContextProps {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  getIdItems: () => number[];
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getIdItems: () => [],
  clearCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<IProduct[] | []>(() => {
    if (typeof window !== "undefined") {
      const cartdata = localStorage.getItem("cart");
      return cartdata ? JSON.parse(cartdata) : [];
    }
  });

  const { dataUser } = useAuth();

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems]);

  const addToCart = (product: IProduct) => {
    if (!dataUser) {
      alert("Debe haber una sesión iniciada.");
      return;
    }
    const productDuplicated = cartItems.some((item) => item.id === product.id);
    if (productDuplicated) {
      alert("Ya tienes este item en el carro de compras");
      return;
    }
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (idProduct: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== idProduct),
    );
  };

  const getIdItems = () => {
    return cartItems.map((item) => item.id);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, clearCart, removeFromCart, getIdItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
