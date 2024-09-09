import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(){
    
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
    // esto no funciona:
    //for (var i of newProducts){
      //this.products.push(i);
    //}
    newProducts.filter(producto => this.products.push(producto))
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
