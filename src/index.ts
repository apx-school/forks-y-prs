import products from "./products.json";

export class Product {
  name: string;
  price: number;
  id: number
  
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(priceThreshold: number): Product[] {
    return products.filter((product) => product.price < priceThreshold);
  }
}

export class User {
  name: string;
  products: Product[];

  constructor(name: string) {
    this.name = name;
    this.products = [];
  }

  addProduct(newProduct: Product): void {
    this.products = this.products.concat(newProduct);
  }

  addProducts(newProducts: Product[]): void {
    this.products.push(...newProducts);
  }
}



exports.User = User;
