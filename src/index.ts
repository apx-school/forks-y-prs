import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    //this.id = id;
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number){
    return products.filter(p=>{
     return p.price < precioBase
    })
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
    this.products = this.products.concat(newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
