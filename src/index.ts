import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(price: number): Product[] {
    const productosNoTanCaros: Product[] = [];
    products.forEach((p) => {
      if (p.price < 250) productosNoTanCaros.push(p);
    });
    return productosNoTanCaros;
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
    newProducts.forEach((p) => {
      this.products.push(p);
    });
  }
}

export { User, Product };
