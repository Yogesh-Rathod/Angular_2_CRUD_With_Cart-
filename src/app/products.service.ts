import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

	public PRODUCTS:any[] = [
		{
			id: 1,
			name: 'a laptop 1',
			desc: 'laptop1 1 description',
			price: 1000,
			imagesrc: 'assets/images/product1.png'
		},
		{
			id: 2,
			name: 'z laptop 2',
			desc: 'laptop1 2 description',
			price: 5000,
			imagesrc: 'assets/images/product2.jpg'
		},
		{
			id: 3,
			name: 'y laptop 3',
			desc: 'laptop1 3 description',
			price: 3000,
			imagesrc: 'assets/images/product3.jpg'
		},
		{
			id: 4,
			name: 'g laptop 2',
			desc: 'laptop1 2 description',
			price: 7000,
			imagesrc: 'assets/images/product2.jpg'
		},
	];

	public cartItems:any[] = [];
	public cartCount:number = 0;

	getProducts():any[] {
		return this.PRODUCTS;
	}

	getCartItems():any[] {
		return this.cartItems;
	}

	getcartCount() {
		return this.cartCount;
	}

	addProduct(item) {
		this.PRODUCTS.push(item);
		return this.PRODUCTS;
	}

	addCartCount(value) {
		this.cartCount = value;
	}

	addToCart(item) {
		this.cartItems.push(item);
		return this.cartItems;
	}

	deleteProduct(items) {
		// this.PRODUCTS = items;
		// return this.PRODUCTS;
	}

	editProduct(items) {
		this.PRODUCTS = items;
		return this.PRODUCTS;
	}

  constructor() {}

}
