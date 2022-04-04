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

    var productsBelow = products.filter((x)=>{
      return x.price < price
    })

    return productsBelow
  }
};

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
    for (let i = 0; i < newProducts.length; i++) {
      const element = newProducts[i];
      this.products.push(element);
    }
  }

};

// const productosNoTanCaros = Product.findProductsBelow(250)
// console.log(productosNoTanCaros);

export { User, Product };
