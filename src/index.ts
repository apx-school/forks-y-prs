import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase:number) {
    const produPrecioBase = products.filter(producto => producto.price < precioBase );
    return produPrecioBase;
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
    for  (const producto of newProducts ){
      this.products.push(producto);
    }
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
