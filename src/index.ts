import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number): Product[] {
    const prodsMasBaratosQue = [];
    products.forEach((producto) => {
      if (producto.price < precioBase) {
        prodsMasBaratosQue.push(producto);
      }
    });
    return prodsMasBaratosQue;
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
    newProducts.forEach((producto) => {
      this.products.push(producto);
    });
  }
}

export { User, Product };
