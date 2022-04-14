import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number) {
    const productosPrecioBajo = products.filter(function (i) {
      return i.price < precioBase;
    });
    return productosPrecioBajo;
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
  addProducts(newProduct: Product[]) {
    for (let i = 0; i < newProduct.length; i++) {
      const element = newProduct[i];
      this.products.push(element);
    }
  }
}

export { User, Product };
