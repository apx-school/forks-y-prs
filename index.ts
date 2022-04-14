import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  id: number;
  name: string;
  price: number;
  
  static findProductsBelow(precioBase: number):Product[] {
    const productosMenoresQue = products.filter((cadaProducto) => {
     return cadaProducto.price < precioBase
    });
    return productosMenoresQue;
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
  const listaNuevaDeProductos = this.products.concat(newProducts)
  this.products = listaNuevaDeProductos
  }
}

export { User, Product };
