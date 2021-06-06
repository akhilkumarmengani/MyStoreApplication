import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';
import * as data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  pData: Product[] = [];
  products: Product[] = [];
  cartItems: CartItem[] = [];

  getProducts(): Product[]{
  this.pData = <Product[]>data;

   for(let i = 0; i < this.pData.length; i++){
      this.products.push(this.pData[i]);
   }
   return this.products;
  }

  addToCart(product: Product, quantity:number):void{
    const cost:number = product.price * quantity;
    this.cartItems.push({ product : product , quantity: quantity, totalCost : cost});
  }

  getCartItems(): CartItem[]{
    return this.cartItems;
  }

}