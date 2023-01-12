import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number): Product[]{
    const listaDeProductos: Product[] = []
    for(const prod of products){
      prod.price < precioBase ? listaDeProductos.push(prod): null;    
    }

    
    return listaDeProductos
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
    this.products.push.apply(this.products, newProducts);
  }
}

Product.findProductsBelow(4)
export { User, Product };
