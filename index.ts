import * as products from "./products.json";

class Product {
  static findProductsBelow(price: number) {
    const productos = products
    const precioBelows = productos.filter(prod => prod.price < price)
    return precioBelows

  }
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
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
    this.products = [...this.products, ...newProducts]
  }

}

export { User, Product };
