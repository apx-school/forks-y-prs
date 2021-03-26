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
    return products.filter((p)=>{ p.price < price })
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
    for (let index = 0; index < newProducts.length; index++) {
      const element = newProducts[index];
      return this.products.push(element)
    };
  }
}

export { User, Product };
