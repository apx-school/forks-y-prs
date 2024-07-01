import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(priceBase: number): Product[] {
    return products.filter(
      (product: { price: number }) => product.price < priceBase
    );
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
    newProducts.forEach((products) => {
      this.products.push(products);
    });
  }
}

export { User, Product };
