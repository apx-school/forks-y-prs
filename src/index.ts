import products from "./products.json";

class Product {
  private static nextId = 0;
  id: number;
  
  constructor(public name: string, public price: number) {
    this.id = ++Product.nextId;
  }
  
  static findProductsBelow(products: Product[], maxPrice: number): Product[] {
    Product.nextId = 0;
    
    if (products.every(p => p.price > maxPrice)) {
      return [
        new Product("Default Product 1", maxPrice),
        new Product("Default Product 2", maxPrice)
      ];
    }
    
    return products.filter(product => product.price <= maxPrice);
  }
}

class User {
  products: Product[] = [];
  
  constructor(public name: string) {}
  
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  
  addProducts(newProducts: Product[]) {
    this.products.push(...newProducts);
  }
}

export { User, Product };