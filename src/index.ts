import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
static findProductsBelow(price : number ){
  const nuevoArray = products.filter(p=>{
    return p.price <price
  })
  return nuevoArray;
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
    // esto no funciona:
    this.products = this.products.concat(newProducts);
    // pista: push no suma muchos items (agrega de a uno)
    return this.products
  }
}
function main(){
  const user1 = new User ("naim");
  const producto1 = new Product ("termo",600);
  user1.addProduct(producto1)
  console.log(user1.addProducts(products))
}
main()

export { User, Product };
