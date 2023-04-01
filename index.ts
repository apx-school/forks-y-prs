import * as products from "./products.json";

class Product {
  static findProductsBelow(price: number) {
    const nuevoArray = products.filter(p=>{
      return p.price < price;
    })
    return nuevoArray
  }
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
  addProducts(newProducts: Product[]) {
    this.products = this.products.concat  (newProducts);
  }
}

export { User, Product };
