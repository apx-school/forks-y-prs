import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(price: number) {
    return products.filter((product) => product.price < price);
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
    // esto no funciona:
    this.products.push(products[0]);
    this.products.push(products[1]);
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
