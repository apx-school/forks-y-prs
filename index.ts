import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(precioBase:number){
    const nuevoArray=products.filter(p=>{
      return p.price<precioBase;
    });
    return nuevoArray;
  };
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
    this.products=this.products.concat(newProducts);
  }
}

export { User, Product };
