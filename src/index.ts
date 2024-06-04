import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number) {
    const productosMenores = products.filter((product) => product.price < precioBase);
    return productosMenores;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(product: Product) {
    product.id = this.products.length; // Asignar un id incremental
    this.products.push(product);
  }
  addProducts(products: Product[]) {
    this.products.push(...products);
  }
}

export { User, Product };
