import * as productos from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  // Método estático para buscar dentro del JSON todos los precios menores a X valor: Utiliza el metodo de array filter() con el  array de objetos/coll importado del JSON, llamdo "productos". Con el metodo filter() itero las posiciones de la coll y le indico que devuelva unicamente la propiedades de la coll llamada "price" que sesa menor al parametro "precio"
  static findProductsBelow(precioBase: number) {
    return productos.filter((i) => {
      return i.price < precioBase;
    });
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
    return (this.products = this.products.concat(newProducts)); // El método de array concat() permite MUCHOS nuevos items a una propiedad, puede recibir y agregar un item o varios. (el metodo de array push solo uno)
  }
}

export { User, Product };
