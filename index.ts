import * as products from "./products.json";

class Product {
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    id: number;
    name: string;
    price: number;
    static findProductsBelow(precioBase: number) {
        const prodEncontrados = products.filter(function (item) {
            return item.price < precioBase;
        });
        return prodEncontrados;
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

export { User, Product };
