import { userInfo } from "os";
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
    const products0 = products[0].price
    const products1 = products[1].price
    const products2 = products[2].price
    const products3 = products[3].price
    const products4 = products[4].price

    const name0 = products[0].name
    const name1 = products[1].name
    const name2 = products[2].name
    const name3 = products[3].name
    const name4 = products[4].name  


    if (products0 < precioBase)
    return name0

    if (products1 < precioBase)
    return name1

    if (products2 < precioBase)
    return name2

    if (products3 < precioBase)
    return name3

    if (products4 < precioBase)
    return name4
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
