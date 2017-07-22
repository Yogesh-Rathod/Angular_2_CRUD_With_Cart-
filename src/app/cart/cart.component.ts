import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { ProductsService } from '../products.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	cartItems:any[] = [];

	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		console.log("CartComponent ngOnInit");
		this.cartItems = this.productsService.getCartItems();
	}

}
