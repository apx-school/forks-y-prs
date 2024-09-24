import  products from "./products.json";



class Product {  
constructor(name: string, price: number) {
    
    this.name = name;
    this.price = price;
  }

  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number){
    return products.filter((p) => p.price < precioBase)
    }

}

class User {
  
  name: string;
  products: Product[] = [];
  
  constructor(name: string) {
    this.name = name;
  }
  
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  
  addProducts(newProducts: Product[]) {
    this.products = this.products.concat(newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }

  
}


export { User, Product };
