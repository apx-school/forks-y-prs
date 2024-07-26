import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  // Esto se debe a que los tests van a intentar testear un método estático findProductsBelow
  // (precioBase:number) que debe devolver los productos
  //  (que son importados desde ./products.json) 
  // con el precio menor al del parámetro precioBase. Agregá este método y suma la lógica 
  // necesaria para que este test pase.

  static findProductsBelow(precioBase: number): Product[] {
      
      const arrayPrecioMenorQue = [];
      products.forEach((i) => {
        if (i.price < precioBase){
          arrayPrecioMenorQue.push(i)
        }
    })
    return arrayPrecioMenorQue;   
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
    newProducts.forEach((i) => {this.products.push(i)});
    // pista: push no suma muchos items (agrega de a uno)
  }
}

export { User, Product };
