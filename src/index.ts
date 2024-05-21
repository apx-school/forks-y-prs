import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  /**
   * ! agregar metoodo estatico : busca y devuelve 
   * ! todos los productos cuyo precio es menor al precio especificado como argumento.
   */

  static findProductsBelow(price : number){
    const arrayPrice= products.filter(p =>{
      return p.price < price
    })
    return arrayPrice;
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
    this.products= this.products.concat(newProducts);
    // pista: push no suma muchos items (agrega de a uno)

    /**
     * ! concat 
     * ? permite ir permite agregar elementos al array
     */
  }
}

export { User, Product };
