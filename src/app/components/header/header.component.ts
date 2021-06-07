import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService : ProductService) { }

  cartSize: number = 0;
  ngOnInit(): void {
  }

  getCartSize():number{
    this.cartSize = this.productService.getCartSize()
    return this.cartSize;
  }



}
