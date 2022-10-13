import * as products from "./products.json";
// const TEXTO_PARSEADO: object[] = JSON.parse(products);


class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase:number): any{
    products.filter((p) => p.price <= precioBase)
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
  addProducts(newProducts: Product) {
    this.products.push(newProducts);
  }
}

export { User, Product };
