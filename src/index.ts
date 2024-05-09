import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(valor: number): Product[] {
    let productsBelow = products.filter((product) => product.price <= valor);
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
    // esto no funciona:
    for (let i = 0; i < newProducts.length; i++) {
      this.products.push(newProducts[i]);
    }
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
