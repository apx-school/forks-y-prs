import * as products from "./products.json";
import * as fs from "fs"

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow ( precioBase: number) : Product [] {
    const precioTope:number = precioBase
    const string = fs.readFileSync("./products.json").toString()
    const coleccionProductos = JSON.parse(string)
    const coleccionResultado : Product [] = coleccionProductos.filter((cadaProducto) => {
     if (cadaProducto.price < precioTope) {return true} 
    })
  return coleccionResultado
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
    const coleccionProductos: Product[] = newProducts
    coleccionProductos.forEach((cadaPructo) => {this.products.push(cadaPructo)})
    
  }
}

export { User, Product };
