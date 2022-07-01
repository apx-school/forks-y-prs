import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(price: number){
    const nuevoArray = products.filter(p=>{
      if(p.price < price){
        return p
      }
    })
    return nuevoArray
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
    console.log(this.products)
    this.products = this.products.concat(newProducts);
    
    console.log(['El new'],newProducts)
    console.log(this.products)
  }
}

export { User, Product };
