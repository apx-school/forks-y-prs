import products from "./products.json";
const productos = products
class Product {
  id: number;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(precioBase:number):Product[] {
    let productosMenores: Product[];

    productosMenores = products.filter(element => {
      return element.price < precioBase
    });
    console.log(productosMenores)
    return productosMenores;
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
      this.products.push(element)
    });
 
  }
  
}




console.log(Product.findProductsBelow(250))
export { User, Product, productos };
