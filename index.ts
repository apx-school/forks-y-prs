import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

 static findProductsBelow(precioBase:number): Product[] {
  const productos = []
  products.forEach(element => {
    if (element.price < precioBase) {
      const productoResultado = new Product (element.name, element.price)
      productoResultado.id = element.id
      productos.push (productoResultado)}
    });
    return productos
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
    newProducts.forEach(element => {
      this.addProduct(element)
    });
   }
}

export { User, Product };
