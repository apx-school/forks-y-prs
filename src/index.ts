import products from './products.json';

class Product {
  id: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(precioBase: number): Product[] | undefined {
    return products.filter(product => product.price < precioBase);
  }
}

class User {
  name: string;
  products: Product[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
  }

  addProducts(newProducts: Product[]): void {
    for (const product of newProducts) {
      this.products.push(product);
    }
  }
}

export { User, Product };
