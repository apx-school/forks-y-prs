import products from "./products.json";
import * as fs from "fs";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number) {
    const productosJson = JSON.parse(
      fs.readFileSync(__dirname + "/products.json", "utf-8")
    );

    for (let i = 0; i < productosJson.length; i++) {
      return productosJson.filter(
        (producto: any) => producto.price < precioBase
      );
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
  addProducts(newProducts: Product[]) {
    this.products.push(...newProducts);
  }
}

export { User, Product };
