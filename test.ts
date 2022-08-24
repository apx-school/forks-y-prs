import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase User", (t) => {
  const user = new User("marce");

  t.is(user.name, "marce");
});

test("Testeo la clase Product y métodos de User", (t) => {
  const producto = new Product("termo", 500); ////////////Instanciando constructor de la clase Product //
  const productosNoTanCaros = Product.findProductsBelow(250); //Dandole un valor al parametro de mi metodo statico

  const user = new User("marce"); ////////////////////////Instanciando constructor de la clase User //
  user.addProduct(producto); // Agregando un producto
  user.addProducts(productosNoTanCaros); // Agregando varios productos que se van filtrando en el metodo statico

  t.is(user.arrayProductVacio[0].name, "termo");
  t.is(user.arrayProductVacio[0].price, 500);
  t.is(user.arrayProductVacio[1].id, 1);
  t.is(user.arrayProductVacio[2].id, 2);
});
