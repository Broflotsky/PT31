import { IProduct } from "@/interfaces/product.interface";

export const mockProducts: IProduct[] = [
  {
    id: 1,
    name: "Auriculares Bluetooth",
    description: "Cancelacion de ruido y bateria de larga duracion",
    price: 120000,
    stock: 15,
    image: "https://picsum.photos/seed/headphones/400/280",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Mouse Gamer",
    description: "Sensor optico de alta precision y RGB",
    price: 85000,
    stock: 22,
    image: "https://picsum.photos/seed/mouse/400/280",
    categoryId: 2,
  },
  {
    id: 3,
    name: "Teclado Mecanico",
    description: "Switches red y estructura compacta",
    price: 135000,
    stock: 9,
    image: "https://picsum.photos/seed/keyboard/400/280",
    categoryId: 2,
  },
  {
    id: 4,
    name: "Monitor 24 Pulgadas",
    description: "Panel IPS con frecuencia de 75Hz",
    price: 310000,
    stock: 7,
    image: "https://picsum.photos/seed/monitor/400/280",
    categoryId: 3,
  },
];
