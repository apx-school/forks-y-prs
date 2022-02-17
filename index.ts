import * as products from "./products.json";
export { Product, User };

class Product {
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    id: number;
    name: string;
    price: number;
    static findProductsBelow(precioBase: number) {
        const precioBajo = products.filter((item) => {
            return item.price < precioBase;
          });
          return precioBajo
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
        this.products = this.products.concat(newProducts);
    }
}

// export { User, Product };

// Agregar el método estático findProductsBelow(precioBase:number)
// que devuelva los productos (que son importados desde ./products.json)
// con el precio más bajo que el parámetro precioBase.
