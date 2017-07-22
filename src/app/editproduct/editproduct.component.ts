import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as _ from 'lodash';

import { ProductsService } from '../products.service';

@Component({
	selector: 'app-editproduct',
	templateUrl: './editproduct.component.html',
	styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
	products:any;
	productID:any;

	constructor(
			private router: Router,
			private activatedRoute: ActivatedRoute,
			private productsService: ProductsService) { }

	ngOnInit() {
		console.log("EditproductComponent ngOnInit");
		this.products = this.productsService.getProducts();

		this.activatedRoute.params.subscribe((params: Params) => {
			this.productID = params.id;
		});
	}

	editProduct(editProductForm) {
		this.router.navigate(['/productlisting']);
	}

}
