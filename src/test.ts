import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase Product y sus métodos", (t) => {
  const user = new User("marce");
  const producto = new Product("termo", 500);
  const productosMenores = Product.findProductsBelow(250);

  user.addProduct(producto);

  if (productosMenores.length > 0) {
    user.addProducts(productosMenores);

    t.is(user.products[0].name, "termo");
    t.is(user.products[0].price, 500);

    if (user.products.length > 1) {
      t.is(user.products[1].id, 1);
    }

    if (user.products.length > 2) {
      t.is(user.products[2].id, 2);
    }
  } else {
    t.fail(`No se encontraron productos por debajo de 250`);
  }
});

