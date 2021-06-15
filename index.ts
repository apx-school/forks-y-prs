import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(price: number) { //El precio del producto sea menor al precio que me pasaron en la funcion lo voy a devolver y el array que me genera el filter va a tener esos items
    return products.filter(p => {
      return p.price < price
    })
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
    this.products = this.products.concat(newProducts);

  }
}



export { User, Product };
