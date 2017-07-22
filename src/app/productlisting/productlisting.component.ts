import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { ProductsService } from '../products.service';



@Component({
	selector: 'app-productlisting',
	templateUrl: './productlisting.component.html',
	styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {
	cartItems:any[] = [];
	products:any = [];
	cartCount:number = 0;

	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		console.log("ProductlistingComponent ngOnInit");
		this.products = this.productsService.getProducts();
		this.cartItems = this.productsService.getCartItems();
		this.cartCount = this.productsService.getcartCount();
	}

	deleteProduct(item) {
		_.remove(this.products, item);
	}

	sortListing(value) {
		let sortedProducts;
		switch ( value ) {
			case "name-asc":
			sortedProducts =  _.orderBy(this.products, 'name', 'asc');
			this.products = sortedProducts;
			break;
			case "name-des":
			sortedProducts =  _.orderBy(this.products, 'name', 'desc');
			this.products = sortedProducts;
			break;
			case "price-asc":
			sortedProducts =  _.orderBy(this.products, 'price', 'asc');
			this.products = sortedProducts;
			break;
			case "price-des":
			sortedProducts =  _.orderBy(this.products, 'price', 'desc');
			this.products = sortedProducts;
			break;
		}
	}

	searchResults(value) {
		if ( value != '' ) {
			var results = _.filter(this.products, function(innervalue) {
				return innervalue.desc.indexOf(value) > -1 || innervalue.name.indexOf(value) > -1 ;
			});
			this.products = results;
		} else {
			this.products = this.productsService.getProducts();
		}
	}

	addToCart(item) {
		++this.cartCount;
		this.productsService.addCartCount(this.cartCount);
		let alreadyAdded = _.includes(this.productsService.getCartItems(), item);

		if ( alreadyAdded == true ) {
			item.quantity = item.quantity + 1;
		} else {
			item.quantity = 1;
			this.productsService.addToCart(item);
		}
	}

}
