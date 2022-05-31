import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(price:number){
   const nuevoArray  =  products.filter(p=>{
  return  p.price < price
    })
    return nuevoArray
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
    this.products = this.products.concat(newProducts);
  }
// // static findProductsBelow(precioBase:number){
// //   return function(precioBase){
// //     const precioEncontrado = products.sort(function(a,b){
// //     if(  a.price < b.price){
// //       return -1
// //     }
// //     if (a.price > b.price){
// //       return 1
// //     }
// //     return 0
// //     })
// //     console.log(precioEncontrado)
// //   }
  
//   }
}

export { User, Product };
