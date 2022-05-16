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
    var precioMenor = products.filter((element) => {
      if (element.price < precioBase) {
        return element;
      }
    });
    return precioMenor;
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
    newProducts.forEach((element) => {
      this.products.push(element);
    });
  }
}

export { User, Product };
