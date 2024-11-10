import products from "./products.json";

class Product {
  constructor(name: string, price: number,id : number) {
    this.name = name;
    this.price = price;
    this.id=id;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase:number ):Product[]{

    const nuevoArray= products.filter(product => product.price < precioBase);
    return nuevoArray;
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
    // Usamos forEach para agregar los productos
    newProducts.forEach(product => {
      this.products.push(product);
    });
  }


}

export { User, Product };
