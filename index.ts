import * as products from "./products.json";

class Product {
  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name;
    this.price = price;
  }
  static findProductsBellow(precioBase: number) {
    const nuevoArray = products.filter(function (p) {
      return p.price < precioBase
    })
    return nuevoArray
  }

  id: number;
  name: string;
  price: number;
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
    this.products = this.products.concat(newProducts);
  }
}

export { User, Product };
