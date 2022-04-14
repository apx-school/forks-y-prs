import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  //Se procede a utlizar una función estática, utilizando filter.
  //para buscar los productos con el precio menor
  //al parámetro precioBase.
  static findProductsBelow(precioBase: number) {
    return products.filter((x) => x.price < precioBase);
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
  //Se realiza el arreglo del método addProducts utilizando forEach,
  //para iterar el array y agregar un nuevo producto.
  addProducts(newProducts: Product[]) {
    newProducts.forEach((x) => {
      this.products.push(x);
    });
  }
}

export { User, Product };
