import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(precioBase: number) {
    return products.filter(function (p) {
      return p.price < precioBase;
    });
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
    const nuevaLista = this.products.concat(newProducts);
    this.products = nuevaLista;
  }
}

export { User, Product };
