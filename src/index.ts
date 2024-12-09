import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number){
    return products.filter((product) => product.price < precioBase)
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
    for(const product of newProducts){
      this.products.push(product)
    }
  }
}


export { User, Product };
