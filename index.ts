import * as products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  static findProductsBelow(precioBase: number) {
    const nuevoArray = products.filter((item) => {
      return item.price < precioBase;
    });
    return nuevoArray;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  arrayProductVacio: Product[] = [];
  ///////// Agrega solo 1 producto!
  addProduct(newProduct: Product) {
    this.arrayProductVacio.push(newProduct);
  }
  // Agrega varios productos!////
  addProducts(newProducts: Product[]) {
    newProducts.forEach((item) => {
      this.arrayProductVacio.push(item);
    });

    // this.arrayProductVacio = this.arrayProductVacio.concat(newProducts); ///
    //se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
  }
}

export { User, Product };
