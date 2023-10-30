import * as products from "./products.json";
import * as fs from "fs";

function getArchivo() {
  const jsonFile = "./products.json";
  const archivo = fs.readFileSync(jsonFile, "utf-8");
  const objeto = JSON.parse(archivo);
  return objeto;
}

class Product {
  static contadorID: number = 1;
  constructor(name: string, price: number) {
    this.id = Product.contadorID++;
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precio: number) {
    const archivo = getArchivo();
    return archivo.filter((p) => p.price < precio);
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
    newProducts.forEach((p) => {
      this.products.push(p);
    });
  }
  getProducts() {
    return this.products;
  }
}

export { User, Product, getArchivo };
