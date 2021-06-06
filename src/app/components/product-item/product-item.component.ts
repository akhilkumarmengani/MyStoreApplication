import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  selectedValue: number ;
  quantityList : number[] = [];
  @Input() product: Product;
  constructor(private productService:ProductService) { 
    this.product = {
      id: 1,
      name :'',
      price : 0,
      url : '',
      description : ''
    }
    this.selectedValue = 1;
    this.quantityList = Array.from(Array(10), (_, i) => i+1);
  }

  ngOnInit(): void {
  }
  changingValue(){
   
  }
  onAddToCart(product:Product,quantity:number){
    console.log('In AddToCart');
    console.log(product.name +' '+ quantity);
    this.productService.addToCart(product,quantity);
  }

}
