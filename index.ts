
import * as productsjson from "./products.json";


class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number){
    return productsjson.filter((item) => item.price < precioBase)
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
    for (let index = 0; index < newProducts.length; index++) {
      this.products.push(newProducts[index])
    } 
  }


  
}

export { User, Product };
