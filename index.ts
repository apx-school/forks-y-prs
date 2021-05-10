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

  static findProductsBelow(num:number){
    const topePrecio = num; //Guardo el precio maximo recibido.
    const string = fs.readFileSync(__dirname + "/products.json").toString();
    const parse = JSON.parse(string);
    const precioBajo =  parse.filter(t => {
      if(t.price < topePrecio){
        return t;
      }
    })    
    return precioBajo;
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
  addProducts(newProducts: Product[]){
    const array = newProducts;
    array.forEach(t => { // Cuando hay que manejar "this" es mejor usar forEach().
      this.products.push(t);
    });
  }
}


export { User, Product };
