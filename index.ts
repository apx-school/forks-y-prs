class Product {
  static idCounter = 1;

  constructor(name: string, price: number) {
    this.id = Product.idCounter++;
    this.name = name;
    this.price = price;
  }

  id: number;
  name: string;
  price: number;

  static findProductsBelow(priceBase: number, allProducts: Product[]): Product[] {
    return allProducts.filter((product) => product.price <= priceBase).map((product) => ({ ...product, id: Product.idCounter++ }));
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
    // Usamos el spread operator (...) para agregar los nuevos productos sin modificar el array original
    this.products = [...this.products, ...newProducts.filter(product => product instanceof Product)];
  }
}

export { User, Product };
