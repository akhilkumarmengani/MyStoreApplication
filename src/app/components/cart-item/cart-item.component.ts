import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:CartItem ;
  productItem : Product = new Product();
  constructor() {
     this.cartItem = { product : this.productItem, quantity : 1, totalCost : 0};
   }

  ngOnInit(): void {
    
  }

}
