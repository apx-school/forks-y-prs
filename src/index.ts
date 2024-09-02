import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  //Metodos
  static findProductsBelow(precioBase: number) : Product[] | undefined {
    return products.filter(product => product.price <= precioBase);
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
    // esto no funciona:
    /* for (let i=0; i < newProducts.length; i++) {
      this.products.push(newProducts[i]);
    } */
    for (const product of newProducts) {
      this.products.push(product);
    }
    //this.products.push(newProducts);
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
