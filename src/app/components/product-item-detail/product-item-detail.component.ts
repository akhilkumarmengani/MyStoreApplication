import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../models/Product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id: number;
  product : Product;
  quantity : number;
  selectedValue : number;
  constructor(private route : ActivatedRoute, private productService:ProductService) {
    this.id = 1;
    this.product = new Product();
    this.quantity = 1;
    this.selectedValue = 1;
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(id);
    this.route.queryParamMap.subscribe(params => {
       console.log(params);
    });
  }

  onAddToCart(product:Product,quantity:number){
    console.log('In AddToCart');
    console.log(product.name +' '+ quantity);
    let name : string = product.name;
    if(quantity>1){
      name += "s";
    }
    this.productService.addToCart(product,quantity);
    alert("Added "+quantity+" "+ name + " to cart");
  }
}
