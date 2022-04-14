import * as products from "./products.json";

class Product {
  static precioBase: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(precioBase: number) {
    const filtrados = products.filter((producto) => {
      return producto.price < precioBase      //<------------- ESTABA PONIENDOLE UN IF Y NO HACIA FALTA, SINO DEVUELVE UN ELEMENTO VOID.
    })

        return filtrados;
  
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
    this.products = this.products.concat(newProducts);
  }
  
}

export { User, Product };
