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
    const myProducts = products;
    const productsBelow = myProducts.filter((x) => x.price < precioBase);
    return productsBelow;
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
    const addProducts = newProducts.forEach((x) => this.addProduct(x));
    return addProducts;
  }
}

var user = new User("Santiago");
var producto = new Product("jamon", 15);
var producto2 = new Product("queso", 16);
var producto3 = new Product("salame", 16);

export { User, Product };
