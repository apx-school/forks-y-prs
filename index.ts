import * as products from "./products.json";
class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(price:number):Product[]{
  return products.filter(i=>{if (i.price < price){return i}})
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
   newProducts.forEach(i=> this.products.push(i));
  }
}

export { User, Product };
