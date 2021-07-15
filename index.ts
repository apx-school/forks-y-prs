import * as products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  /* 
  
  devuelva los productos (que son importados desde ./products.json)
  con el precio más bajo que el parámetro precioBase.

  */
  static findProductsBelow(precioBase: number) {
    return products.filter((i) => {
      return i.price < precioBase;
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
    this.products = this.products.concat(newProducts);
  }
}

export { User, Product };

//Cambio de prueba
