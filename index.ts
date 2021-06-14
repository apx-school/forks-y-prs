import * as products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(price: number) {
    let productsBelow = products.filter((x) => x.price < price);
    return productsBelow;
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
    this.products = this.products.concat(newProducts);
  }
}

export { User, Product };
