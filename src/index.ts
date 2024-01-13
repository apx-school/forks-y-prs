import products from "./products.json";
import fs from "fs"

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number) {
    return products.filter(element => element.price <= precioBase)
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    newProducts.map(element => this.products.push(element))
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
