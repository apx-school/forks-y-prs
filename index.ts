import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(numeroTope: number): Product[] {
    const productosBara = products.filter((item) => item.price < 250);
    return productosBara;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    return this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    const items = newProducts.map((item) => {
      this.products.push(item);
    });
    return items;
  }
}

export { User, Product };
