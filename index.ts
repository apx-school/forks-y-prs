import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
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
  static findProductsBelow(precioBase: number) {
    const productosMasBaratos = products.find((prod) => {
      prod.price < precioBase;
    });
    return productosMasBaratos;
  }
}

export { User, Product };
