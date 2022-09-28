import * as products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;
  
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(precioBase: number) {
    return products.filter((product) => {
      return product.price < precioBase;
    });
  }
}

class User {
  name: string;
  products: Product[] = [];
  
  constructor(name: string) {
    this.name = name;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    this.products.push(...newProducts);
  }
}

export { User, Product };
