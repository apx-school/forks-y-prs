import * as products from "./products.json";
// console.log(products)

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase:number){
    const Jeson = products.filter(function (i){
      return i.price < precioBase
    })
    // console.log(Jeson)
    
    return Jeson
  }
}
// comentario: chequear a partir de esta instancia
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
}

export { User, Product };
