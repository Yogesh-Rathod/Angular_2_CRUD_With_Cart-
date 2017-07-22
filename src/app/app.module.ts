import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

import { ProductsService } from './products.service';


const appRoutes: Routes = [
  { path: 'productlisting', component: ProductlistingComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'editproduct/:id', component: EditproductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductlistingComponent,
    CartComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
