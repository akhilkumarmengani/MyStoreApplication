import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },  
  { path: 'mycart', component: CartComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
