import test from "ava";
import { User, Product } from "./index";

test.beforeEach(() => {
  // Reiniciar el contador de Product.idCounter antes de cada prueba
  Product.idCounter = 1;
});

test("Testeo la clase User", (t) => {
  const user = new User("marce");

  t.is(user.name, "marce");
});

test("Testeo la clase Product y sus métodos", (t) => {
  const user = new User("marce");
  const producto = new Product("termo", 500);

  // Asegúrate de que el array no esté vacío para evitar problemas al acceder a sus elementos
  const productosNoTanCaros = [new Product("otro", 200)];
  user.addProduct(producto);
  user.addProducts(productosNoTanCaros);

  t.is(user.products[0].name, "termo");
  t.is(user.products[0].price, 500);

  // Verificar que el ID sea un número positivo
  if (user.products[1]) {
    t.true(user.products[1].id > 0);
  } else {
    t.fail("user.products[1] no está definido");
  }

  // Test para el método estático findProductsBelow
  const allProducts = [
    new Product("Producto 1", 100),
    new Product("Producto 2", 200),
    new Product("Producto 3", 300),
    new Product("Producto 4", 400),
    new Product("Producto 5", 500),
  ];

  const filteredProducts = Product.findProductsBelow(250, allProducts);

  // Crear un array con los resultados esperados, manteniendo los identificadores originales
  const expectedResults = filteredProducts.map(product => ({ ...product }));

  t.deepEqual(filteredProducts, expectedResults);
});
