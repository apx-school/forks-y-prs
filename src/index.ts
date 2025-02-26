import products from "./products.json";

class Product {
  static products:Product[] = [];
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.id = Product.products.length + 1;
    Product.products.push(this);
  }
  id: number;
  name: string;
  price: number;

  static initProducts() {
    new Product("Producto1", 100);
    new Product("Producto2", 200);
  }

  static findProductsBelow(precio:number){
     
    return Product.products.filter((product) =>  product.price < precio)

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
   
    
    this.products.push(...newProducts)
   
  }
  


}

export { User, Product };
