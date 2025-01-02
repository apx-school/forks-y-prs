import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase User", (t) => {
  const user = new User("marce");

  t.is(user.name, "marce");
});

// El siguiente text va a fallar inicialmente, el objetivo es
// entender que te pide el test y hacer los cambios necesarios
// no modifiques el test. El test es una guía para entender
// que debería pasar.

test("Testeo la clase Product y sus métodos", (t) => {
  const user = new User("marce");
  const producto = new Product("termo", 500);

  // El método estatico findProductsBelow no existe
  // tenés que hacer que funcione
  const productosNoTanCaros = Product.findProductsBelow(250);

  user.addProduct(producto);
  user.addProducts(productosNoTanCaros);

  t.is(user.products[0].name, "termo");
  t.is(user.products[0].price, 500);
  t.is(user.products[1].id, 1);
  t.is(user.products[2].id, 2);
});
