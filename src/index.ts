import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioBase: number): Product[] {
    return products.filter(p => p.price < precioBase)
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
    this.products.push(...newProducts);
    // Utilización del operador de propagación (...) para evitar la anidación de arrays,
    // permitiendo agregar elementos de newProducts a this.products, que es un array existente.
    // Esto es lo que busca el test.
    // También se podría usar concat() para combinar elementos de varios arrays sin modificar los originales.
    // Nota: push puede agregar múltiples elementos a la vez si se usa el operador de propagación.
    
    // pista: push no suma muchos items (agrega de a uno)
  }

}

export { User, Product };
