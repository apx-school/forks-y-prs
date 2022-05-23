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
  addProducts(newProducts: Product) {
    this.products.push(newProducts);
  };
  static findProductsBelow(precioBase:number){
    const encontrado = products.filter(function(item){
      return item.price < precioBase
    })
    return encontrado;
  }
}


export { User, Product };


function main(){
  const newUser = new User("Mati");
  const newProduct = new Product("Celu", 200);
  newProduct.id = 10;
  

  const prueba = User.findProductsBelow(300);
  console.log("Esto es un metodo estatico", prueba)


};
main();