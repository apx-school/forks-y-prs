import * as products from "./products.json";
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
    const coleccion = fs.readFileSync("./products.json");
    const texto = coleccion.toString();
    const parsear = JSON.parse(texto);

    const funcionEncontrar: Product[] = parsear.filter((item) => {
      if (item.price < precioBase) {
        return item;
      }
    });
    return funcionEncontrar;
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
    newProducts.forEach((item) => {
      this.products.push(item);
    });
  }
}

export { User, Product };
