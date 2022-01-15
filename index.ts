import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(precioBase: number) {
    const productsBelows = products.filter((objPoduct) => {
      return objPoduct.price < precioBase;
    });

    return productsBelows;
  }

  id: number;
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
  addProducts(newProducts: Product[]) {
    //la forma optima con metodos
    this.products = this.products.concat(newProducts);

    //manera de mariano mezcla facu y curso
    /* for (let i = 0; i < newProducts.length; i++) {
      this.products.push(newProducts[i]);
    }*/
  }
}

export { User, Product };
