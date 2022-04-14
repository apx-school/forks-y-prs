import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  
 static findProductsBelow (precioBase: number) {
   
   const filtrado=products.filter(function (i){
     return i.price<precioBase
   })
   return filtrado
 };
 
    
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

  addProducts(newProducts: Product []) {
     return this.products = this.products.concat(newProducts);
  }

  
}


export { User, Product };
 

