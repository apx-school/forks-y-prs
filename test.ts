import test from "ava";
import {User, Product} from "./index";

test("Testeo la clase User", (t) => {
  const user = new User("marce");

  t.is(user.name, "marce");
});
test("Testeo la clase Product y sus métodos", (t) => {
  const user = new User("marce");
  const producto = new Product("termo", 500);
  const productosNoTanCaros = Product.findProductsBelow(250);

  user.addProduct(producto);
  user.addProducts(productosNoTanCaros);

  t.is(user.products[0].name, "termo");
  t.is(user.products[0].price, 500);
  t.is(user.products[1].id, 1);
  t.is(user.products[2].id, 2);
});
