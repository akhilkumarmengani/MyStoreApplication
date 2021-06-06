import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { CartItem } from '../../models/CartItem'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItem[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }




}
