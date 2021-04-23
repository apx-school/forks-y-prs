import * as products from "./products.json";

class Product {
    id: number;
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    static findProductsBelow(precioBase: number) {
        // NOTA: Typescript permite importar los JSON, sin tener que leerlos ni parsearlos

        // Hago un filter
        const arrayProductosEncontrados = products.filter(
            (item) => item.price < precioBase
        );

        return arrayProductosEncontrados;
    }
}

class User {
    name: string;
    products: Product[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addProduct(newProduct: Product) {
        this.products.push(newProduct);
    }

    addProducts(newProducts: Product[]) {
        this.products = this.products.concat(newProducts);
    }
}

// PRUEBAS
Product.findProductsBelow(1);

export { User, Product };
