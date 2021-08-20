import * as products from "./products.json";
import * as fs from "fs";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  
  static findProductsBelow(precioBase:number){
    const string = fs.readFileSync("./products.json").toString();
    const productosParseados = JSON.parse(string);
    const productosFiltradosPorPrecio = productosParseados.filter((prods:Product)=>{
      if (prods.price < precioBase){ return true}
    })
    return productosFiltradosPorPrecio;
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
    const productos: Product[] = newProducts;
    productos.forEach((thisProductos) => {
      this.products.push(thisProductos);
    })
  }

}

export { User, Product };
