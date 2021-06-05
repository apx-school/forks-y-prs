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
        var productoBaratos = products.filter((objProduct) => {
            return objProduct.price < precioBase;
        });
        return productoBaratos;
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
        newProducts.map((producto) => {
            this.products.push(producto);
        });
    }
}

export { User, Product };
