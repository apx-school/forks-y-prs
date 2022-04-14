import * as products from "./products.json";
// import * as fs from "fs";
// para que tome el fs tengo que poner npm install --save-dev @types node
class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number) {
    // const string = fs.readfileSync("./products.json").toStirng();
    // const collection = JSON.parse(string)
    return products.filter((p) => p.price < precioBase);
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
    newProducts.forEach((a) => {
      this.products.push(a);
      // this.products = this.products.concat(newProducts)
    });
  }
}

export { User, Product };
