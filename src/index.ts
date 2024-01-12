import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(basePrice: number) {
    return products.filter((products) => products.price < basePrice);
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
    // a diferencia del push, concat si puede sumar de a más de un item a un array
    this.products = this.products.concat(newProducts);
  }
}

export { User, Product };
