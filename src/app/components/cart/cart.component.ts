import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { CartItem } from '../../models/CartItem'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItem[] = [];
  totalCost : number = 0;
  firstName : string;
  address : string ;
  ccNumber : string ;
  orderDetails = {};
  constructor(private productService : ProductService, private router: Router) { 
    this.firstName = '';
    this.address = '';
    this.ccNumber = '';
  }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
    this.totalCost = this.getTotalCost();
  }

  getTotalCost():number{
     this.totalCost = this.productService.getTotalCartCost().toFixed(2) as unknown as number;
     return this.totalCost;
  }

  onSubmit():void{

  }

  onClick():void{
    this.totalCost = this.getTotalCost();
    let data = {name : 'Akhil' , cost : this.totalCost}
    this.router.navigateByUrl('/confirmation',{ state : data});
    this.productService.clearCartItems();
  }

  ngOnDestroy():void{
    
  }

  removeItem(cartItem: CartItem):void{
    this.productService.removeItem(cartItem);
  }


}
