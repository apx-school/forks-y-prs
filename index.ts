import * as products from "./products.json";
// const TEXTO_PARSEADO: object[] = JSON.parse(products);


class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase:number){
    // const findProduct = products.filter(function(p){
    //   if (p.price <= precioBase){
    //     return p;
    //   }
    // })
    // return findProduct;
    return products.filter((p) => p.price <= precioBase);
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
    newProducts.forEach((p) => this.products.push(p))
    // this.products.push(newProducts);
  }
}

export { User, Product };