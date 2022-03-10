import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(pricenumber:number){
    return products.filter((p:any)=>{
      return p.price<=pricenumber
    })
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
    Array.prototype.push.apply(this.products,newProducts)
  }
}

const p1 = new Product("compu", 1000)
const p2 = new Product("celu", 1500)

const user1 = new User("eleri")

user1.addProducts([p1,p2])
const constante1=Product.findProductsBelow(250)

console.log(user1)
console.log(constante1)

export { User, Product };
