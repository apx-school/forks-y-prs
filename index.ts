import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  
  static findProductsBelow(precioBase:number) {
    return products.filter((e)=>{return e.price < precioBase})
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
}

// const hernan = new User ("Hernan")
// const prd1 = new Product("cucharita", 10)
// const prd2 = new Product("tenedor", 20)
// hernan.addProducts([prd1, prd2])
// // hernan.addProduct(prd1)
// // hernan.addProduct(prd2)
// console.log(hernan)
// console.log(hernan.products)
// console.log(products)

// const respuesta = Product.findProductsBelow(200)
// console.log(respuesta)

export { User, Product };
