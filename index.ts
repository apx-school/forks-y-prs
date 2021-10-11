import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  
  static findProductsBelow(precioBase: number){
    const productosFiltrados = products.filter(prod => prod.price < precioBase);
    return productosFiltrados;
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
    newProducts.forEach(prod => {
      this.products.push(prod);
    });
  }
}

export { User, Product };
