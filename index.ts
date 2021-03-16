class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
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
}

export { User, Product };
