import products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(price: number): Product[] {
    return products.filter((p) => p.price < price);
  }
}

class User {
  name: string;
  products: Product[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    // esto no funciona:
    this.products.push(...newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
