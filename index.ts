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
    const nuevoArray = products.filter((item) => {
      return item.price < precioBase;
    });
    return nuevoArray;
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
    this.products = this.products.concat(newProducts); ///
    //se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
  }
}

export { User, Product };
