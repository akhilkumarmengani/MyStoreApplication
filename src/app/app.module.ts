import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component'
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ConfirmationComponent,
    CartComponent,
    HeaderComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
