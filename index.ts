import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number){
  const Productosfiltrados = products.filter(p=> p.price < precioBase)
  return Productosfiltrados
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
   // this.products = this.products.concat(newProducts)
    // el metodo concat para array permite recibir mas de un item, a diferencia de push q solo acepta uno.

  for (let contador = 0; contador < newProducts.length; contador++) {
    const productos = newProducts[contador];
     this.products.push(productos);
  }
  }
}

export { User, Product };
