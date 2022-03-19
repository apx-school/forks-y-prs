import * as products from './products.json';

class Product {
	id: number;
	name: string;
	price: number;
	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	static findProductsBelow(precioBase: number): Product[] {
		return products.filter((p) => p['price'] < precioBase);
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
		newProducts.forEach((prod) => this.products.push(prod)); // Mi forma
		// this.products = this.products.concat(newProducts);
	}
}

export { User, Product };
