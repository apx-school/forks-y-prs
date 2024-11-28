import products from "./products.json";

class Product {
  static products: Product[] = [];
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  
  static findProductsBelow(precio: number) {
    const productosEncontrados = products.filter(p => p.price < precio);
    return productosEncontrados;
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
    for (let index = 0; index < newProducts.length; index++) {
      const element = newProducts[index];
      this.products.push(element);
    }
  }
 
}

export { User, Product };
