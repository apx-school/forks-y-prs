import * as products from "./products.json";



class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
 static findProductsBelow(price: number){
   const newArray = products.filter(function(item){
     return item.price < price
   })
   return newArray
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
    this.products = this.products.concat(newProducts);
  }
}
const user = new User("luca")
const product = new Product ("tele", 100)
user.addProduct(product)


console.log(user)
export { User, Product };
