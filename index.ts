import * as products from "./products.json";
const listaProductosString = JSON.stringify(products);
const listaProductosObjetos = JSON.parse(listaProductosString);



class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static  findProductsBelow(precio:number){
    return listaProductosObjetos.filter(function (item){ 
      return item.price < precio;
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
    this.products = this.products.concat(newProducts);
  }
}

export { User, Product };
