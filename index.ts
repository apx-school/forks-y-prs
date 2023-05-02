import * as products from "./products.json";

class Product {
  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBellow(precioBase: number) {
    for (const iterator of products) {
      if (iterator.price < precioBase) {
        return iterator
      }
    }
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
  addProducts(newProducts: Product) {
    this.products.push(newProducts);
  }
}

export { User, Product };
