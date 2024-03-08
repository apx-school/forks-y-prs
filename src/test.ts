import test from "ava";
import { User, Product, findProductsBelow } from "./index";

test("Testeo la clase User", (t) => {
  const user = new User("marce");

  t.is(user.name, "marce");
});

test("Testeo la clase Product y sus métodos", (t) => {
  
  const user = new User("marce");
  const producto = new Product("termo", 200);
  
  user.addProduct(producto);
  const productosNoTanCaros = findProductsBelow(user.products, 300);
  user.addProducts(productosNoTanCaros);
  console.log(user.products)

  t.is(user.products[user.products.length - 1].name, "termo");
  t.is(user.products[user.products.length - 1].price, 200);
  t.is(user.products[0].id, 1);
});
