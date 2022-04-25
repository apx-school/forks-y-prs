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
    const toString = JSON.stringify(products);
    const parsearJson = JSON.parse(toString);
  
    return parsearJson.filter(i => i.price < precioBase);
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
      newProducts.forEach(i => this.products.push(i));
   }
}

export { User, Product };
