import * as products from "./products.json";

class Product {
  id: number;

  constructor(public name: string, public price: number) {
  }

  static findProductsBelow(precioBase: number){
     const productosEncontrados = products.filter(product => product.price < precioBase);
     return productosEncontrados;
  }
}

class User {
  products: Product[]= [];

  constructor(public name: string) {
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  
  addProducts(newProducts: Product[]) {
    this.products.push(...newProducts);
  }
}

export { User, Product };