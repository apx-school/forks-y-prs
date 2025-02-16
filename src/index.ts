import productsData from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  static findProductsBelow(price: number){
    console.log("Tipo de productsData:", typeof productsData);
    const nuevoArray = productsData.filter((p) => {
      return p.price < price;
    });
    return nuevoArray;
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

    // Otra forma de hacerlo
    /*
    newProducts.forEach(product => {
      this.products.push(product);
  });*/

  }
}

export { User, Product };


