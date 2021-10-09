import * as products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(precioBase: number) {
    const preciosFiltrados = products.filter((s) => {
      return s.price < precioBase;
    });
    return preciosFiltrados;
  }
}

class User {
  name: string;
  products: Product[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    const productos = newProducts.map((e) => {
      this.products.push(e);
    });
  }
}

export { User, Product };
