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
    const prodEconomicos: Product[] = products.filter(
      (p) => p.price < precioBase
    );
    return prodEconomicos;
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
    const nuevaLista = this.products.concat(newProducts);
    this.products = nuevaLista;
  }
}

export { User, Product };
