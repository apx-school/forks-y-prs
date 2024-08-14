import products from "./products.json";

class Product {
  id: number | undefined;
  name: string;
  price: number;

  constructor(name: string, price: number, id?: number) {
    this.name = name;
    this.price = price;
    this.id = id; 
  }

  static findProductsBelow(precioBase: number): Product[] {
    return products
      .filter(product => product.price <= precioBase)
      .map(product => new Product(product.name, product.price, product.id));
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
    this.products = this.products.concat(newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
