import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number){
    const productosEncontrados = products.filter(function(producto) {
      return producto.price < precioBase;
    })
    return productosEncontrados; 
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
    newProducts.forEach((item)=>{
      this.products.push(item);
      console.log(item);
    })
  }
}

export { User, Product };
