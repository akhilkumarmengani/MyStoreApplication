import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:CartItem ;
  productItem : Product = new Product();
  itemQuantity : number = 0;;
  constructor(private productService:ProductService) {
     this.cartItem = { product : this.productItem, quantity : 1, totalCost : 0};
    
   }

  ngOnInit(): void {
    this.itemQuantity = this.cartItem.quantity;
  }
  onQuantityChange(quantity : number) : void{
    console.log('Change - '+quantity);
    this.cartItem.quantity = quantity;
    this.cartItem.totalCost = this.cartItem.product.price * quantity;
    console.log('Change - '+this.cartItem.quantity+" "+this.cartItem.totalCost);
    this.productService.updateQuantityInCartItem(this.cartItem);
    console.log(this.productService.getTotalCartCost());
  }

  removeItem():void{
    this.productService.removeItem(this.cartItem);
  }

}
