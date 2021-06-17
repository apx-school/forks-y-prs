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
    const productosBuscados = products.filter(
      (product) => product.price < precioBase
    );
    return productosBuscados;
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
    const arrayConNuevosProductos = this.products.concat(newProducts);
    this.products = arrayConNuevosProductos;
  }
}

export { User, Product };
