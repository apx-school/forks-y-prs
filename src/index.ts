import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(precioAComparar: number): Product[] {
     return products.filter((obj) => {
     return obj.price < precioAComparar
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
    // esto no funciona:
   this.products = this.products.concat(newProducts) ; //ACA PODRÍA USARSE METODO CONCAT
    // pista: push no suma muchos items (agrega de a uno)
    //return products.push(agrega)
  }
}


//const usuario = new User("Tito")
//console.log (products)
//console.log(usuario.addProduct(new Product("chizitos", 5)))
//console.log(Product.findProductsBelow(300))

//const productosNoTanCaros = Product.findProductsBelow(250);
//console.log(productosNoTanCaros); //ESTO FUNCIONA
//usuario.addProduct(new Product("chizitos", 50))
//console.log(usuario) //ESTO FUNCIONA
//usuario.addProducts(products);//ESTO FUNCIONA
//console.log(usuario)

  //usuario.addProduct(producto);
//console.log(usuario.addProducts(productosNoTanCaros));

export { User, Product };
