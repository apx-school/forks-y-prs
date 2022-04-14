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
    const productosNoTanCaros = products.filter((item) => {
      return item.price < precioBase;
    });
    return productosNoTanCaros;
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
    for (let i = 0; i < newProducts.length; i++) {
      const element = newProducts[i];
      this.products.push(element);
    }
  }
}

export { User, Product };
