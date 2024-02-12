import products from "./products.json";


class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number)
  {
    const lista =products.filter((a)=>a.price<=precioBase);
    return lista;
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
    for (let i of newProducts){this.products.push(i)}
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
