import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase:number) {
    const prodMasBaratosQue:Product[] = products.filter(p=>p.price < precioBase);
    return prodMasBaratosQue;
  };
};

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProduct:Product[]) {
  const listaDeProductos = this.products.concat(newProduct)
  this.products = listaDeProductos;
}
}

export { User, Product };
