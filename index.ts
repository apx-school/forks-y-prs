import * as products from "./products.json";

class Product {
	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	id: number;
	name: string;
	price: number;
	static findProductsBelow(precioBase: number): Product[] {
		let productosMenoresA = products.filter((e) => e.price < precioBase);
		return productosMenoresA;
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
		this.products.concat(newProducts);
	}
}

export { User, Product };
