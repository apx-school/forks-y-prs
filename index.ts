import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number)
{
   let filtrado = products.filter(n=>n.price<precioBase)
  
   return filtrado;

 }
}

class User {
  constructor(name: string) {
    this.name = name;
    this.products=[];
  }
  name: string;
  products: Product[] = [];
  
  addProduct(newProduct: Product) {
   return  this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    newProducts.map(n=>this.products.push(n));

    return this.products;
  }
  
 
}
//Agregar el método estático findProductsBelow(precioBase:number) 
//que devuelva los productos (que son importados desde ./products.json)
 //con el precio más bajo que el parámetro precioBase.

 export { User, Product };

