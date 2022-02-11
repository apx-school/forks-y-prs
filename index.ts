import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number) {
    const productosPrecioMasBajo = []
    for (var i = 0; i < products.length; i++){
      if (products[i].price < precioBase) {
        productosPrecioMasBajo.push(products[i])
      }
    }
    return productosPrecioMasBajo
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
    const nuevosProductos = this.products.concat(newProducts);
    this.products = nuevosProductos
  }
}

export { User, Product };
