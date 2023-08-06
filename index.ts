import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
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
  addProducts(newProducts: Product[]) {
   for(const product of newProducts){
this.products.push(product)
   };
  }
  static findProductsBelow(precioBase:number){
    return products.filter((item)=> item.price <= precioBase)
  }
}
const product1 = new Product("Laptop", 1000);
const product2 = new Product("Mouse", 20);
const pedro = new User('Pedro')

pedro.addProduct(product1)

const newProducts = [product1, product2]
pedro.addProducts(newProducts)



export { User, Product };
