import products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(price: number){
    const filtrado = products.filter(p=>{
      return p.price < price
    })
    return filtrado;
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
    for (let i = 0; i < newProducts.length; i++) {
      this.products.push(newProducts[i])
    }
    // this.products = this.products.concat(newProducts);

  }
}

export { User, Product };
