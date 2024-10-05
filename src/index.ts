import products from "./products.json";

class Product {
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
    // esto no funciona:
    for(let i=0;i<newProducts.length;i++){
      this.products.push(newProducts[i]);
    }
    // pista: push no suma muchos items (agrega de a uno)
  }
  static findProductBelow(precioBase:number){
    for(let i=0;i<products.length;i++){
      if(products[i].price<precioBase){
        return products[i];
      }
    }
  }
}

export { User, Product };
