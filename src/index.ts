let idCounter = 0;

class Product {
  constructor(name: string, price: number) {
    this.id = idCounter++;
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number): Product[]{
    return products.filter(product => product.price < precioBase)
                   .map(product => {
                   const newProduct = new Product(product.name, product.price);
                   newProduct.id = product.id;
                   return newProduct;
                   });
                    
  
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
    
    this.products = this.products.concat(newProducts);
  }
}
import products from "./products.json";

const user = new User("Nico");
const productInstances = products.map(product => new Product(product.name, product.price));
user.addProducts(productInstances);
console.log(user.products);

export { User, Product };
