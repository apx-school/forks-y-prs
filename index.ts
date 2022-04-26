/*class Peli{
    constructor(title, tags){
    this.title=title; 
    this.tags=tags
    }
    title:string
    tags:string[]
    getTitle():string{
        return this.title
    }
    static buscarPeli():Peli[]{//entre estos corchetes voy a instanciar una simulacion de "pelis", pero aca cargariamos un json(que esta cargada de dif pelis) por ejemplo.Entonces buscar entre todos ellos y que sea un metodo estatico va a ser de gran ayuda
const resulltado = new Peli("reina",["comedia","romantica"]);
return [resulltado]
    }
}

function main(){
  const mipeli= new Peli ("rogelio",["2","2"])
 console.log(mipeli.getTitle())

const busqueda= Peli.buscarPeli()
console.log(busqueda[0])

}
main();*/

import * as products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

 static findProductsBelow(precioBase:number){
   const preciosBajos= products. filter(p=>{
     return p.price < precioBase 
   })
 return preciosBajos}
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
    this.products= newProducts.concat(newProducts)// se cambio el push, haciendo un concat para que agregue todos los item.

  }
}

export { User, Product };