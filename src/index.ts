import products from "./products.json";
class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  //Podemos instanciar de manera estatica archivos de otro directorio 
  //para poder accederlo de manera local.
  static products = products;
  static findProductsBelow(precioBase: number) {
    return products.filter((prod) => prod.price < precioBase);
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
    this.products.push(...newProducts);
  }
}
const producto1 = new Product("Pan", 2);
const producto2 = new Product("Aceite", 5);
const producto3 = new Product("Lechuga", 4);
const usuario1 = new User("Ivan");
console.log(Product.findProductsBelow(300));
export { User, Product };
