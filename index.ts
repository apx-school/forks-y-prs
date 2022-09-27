import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number){
    const texto = JSON.stringify(products);
    const obj = JSON.parse(texto);

    return obj.filter(item =>{
      if(precioBase > item.price){
        return item;
      }
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
    return newProducts.forEach(item=>{
      this.products.push(item);
    });
  }
} 

export { User, Product };
