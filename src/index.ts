import products from "./products.json";

class Product {
   id: number;
   name: string;
   price: number;
   constructor(name: string, price: number) {
     this.name = name;
     this.price = price }
   static findProductsBelow(precioLimite: number) {
     let iterador: number = 0;
     let cantidad: number = products.length;
     let resultado: Product[] = [];
     for(iterador = 0; iterador < cantidad; iterador++) {
       if(products[iterador].price < precioLimite) {
         resultado.push( products[iterador] ) 
       }
     };
     return resultado 
   }
}

class User {
   name: string;
   products: Product[] = [];
   constructor(name: string) {
     this.name = name }
   addProduct(newProduct: Product) {
     this.products.push(newProduct) }
   addProducts(newProducts: Product[]) {
     this.products = this.products.concat(newProducts);
     return this.products }
}

export { User, Product };
