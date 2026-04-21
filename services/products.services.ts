import { IProduct } from "@/interfaces/product.interface";

export const getAllProducts = async () => {
  try {
    const resAllProducts = await fetch("http://localhost:3005/products", {
      method: "GET",
    });
    const productsResponse: IProduct[] = await resAllProducts.json();
    return productsResponse;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getProductById = async (id: string) => {
  try {
    const allProducts = await getAllProducts();
    const product = allProducts.find((product) => product.id === Number(id));
    if (!product) {
      throw new Error("No se encontro un producto con este ID");
    }
    return product;
  } catch (error) {
    throw new Error(error as string);
  }
};
