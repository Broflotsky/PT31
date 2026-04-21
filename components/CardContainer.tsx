import { getAllProducts } from "@/services/products.services";
import Card from "./Card";

async function CardContainer() {
  const allProducts = await getAllProducts();

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allProducts?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
}

export default CardContainer;
