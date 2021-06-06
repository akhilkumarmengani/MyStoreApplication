import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  name: string = 'Akhil';
  productsList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsList = this.productService.getProducts();
    for(let i = 0; i < this.productsList.length; i++){
      console.log("Name "+ this.productsList[i].name);
      console.log("Name "+ typeof(this.productsList[0]));
   }
  }

}
