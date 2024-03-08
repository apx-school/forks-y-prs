import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

}

function findProductsBelow(updateProducts: Product[], priceFilter: number){
  console.log("updateProducts", updateProducts)
  const filteredProducts = updateProducts.filter(product => product.price < priceFilter)
  return filteredProducts;
}

class User {
  constructor(name: string) {
    this.name = name;
    this.products = products;
  }
  name: string;
  products: Product [];

  addProduct(newProduct: Product) {
    newProduct.id = this.products.length + 1
    this.products.push(JSON.parse(JSON.stringify(newProduct)));
  }
  addProducts(newProducts:Product[]) {
     this.products = newProducts;
  }
  
}
export { User, Product, findProductsBelow };
