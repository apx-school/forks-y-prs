import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number): Product[] {
    return products.filter((i) => i.price < precioBase);
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]): void {
    this.products.push(...newProducts);
  }
}

export { User, Product };
