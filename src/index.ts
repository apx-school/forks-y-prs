import products from "./products.json";

class Product {
  id: number;
  name: string;
  price: number;
  
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  };
  
  static findProductsBelow(precioBase:number) {
    return products.filter(product => product.price < precioBase);
  };
};

class User {
  name: string;
  products: Product[] = [];
  
  constructor(name: string) {
    this.name = name;
  };
  
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  };
  
  addProducts(newProducts: Product[]) {
    for (let product of newProducts) {
      this.products.push(product);
    };
  };
};
export { User, Product };
