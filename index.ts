import * as products from "./products.json";

// console.log(products)

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  
  static findProductsBelow(precioBase: number):Product[]{
    
     const productBelow = products.filter(product => {
      return (product.price < precioBase)
    })
    
    return productBelow
  }
}



class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = []; // ¿Los datos que no sean primitivos los tengo que declarar si o si?
  
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts:Product[]) {
    newProducts.forEach(product => {
      this.products.push(product)
    })
    

  }
}

export { User, Product };

// Arregle addProducts recorriendo el array newProducts del tipo Product[] devuelto por la funcion findProductsBelow
// y agregando (pusheando) cada elemento al array de product como el test pedia
// Agregue el metodo statico findProductsBelow que retorna un array del tipo "Product[]"
