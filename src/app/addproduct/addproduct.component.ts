import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as _ from 'lodash';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  products:any;

  constructor(
      private router: Router,
      private productsService: ProductsService) { }

  ngOnInit() {
    console.log("AddproductComponent ngOnInit");
  }

  addProduct(addProductForm) {
    this.products = this.productsService.getProducts();
    let itemToAdd = {
      id: this.products.length + 1,
      name: addProductForm.name,
      desc: addProductForm.desc,
      price: addProductForm.price
    };

    this.productsService.addProduct(itemToAdd);
    this.router.navigate(['/productlisting']);
  }

}
