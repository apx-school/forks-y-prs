import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precio: number) {
    const filtered = products.filter((product) => {
      if (product.price < precio) {
        return true;
      }
    });
    return filtered;
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
    const addedProducts = this.products;
    newProducts.forEach((product) => {
      return addedProducts.push(product);
    });
    return addedProducts;
  }
}
export { User, Product };
