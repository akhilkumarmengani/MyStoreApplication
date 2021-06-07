import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';
import * as data from '../../assets/data.json';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { 
    // this.getData().subscribe(res => {
    //   for (let index = 0; index < res.length; index++) {
    //     console.log("Akhil");
    //     this.pData.push(res[index]);
    //   }

    // });
  }

  pData: Product[] = [];
  products: Product[] = [];
  cartItems: CartItem[] = [];
  totalCartCost : number = 0;

  getData():Observable<Product[]>{
      return this.httpClient
      .get<Product[]>('../../assets/data.json');
  }

  getProducts(): Product[]{
      //this.pData = <Product[]>data;
      //let testdata : Product[]  = [];
      //testdata = this.httpClient.get('http://localhost:4000/assets/data.json').subscribe(data => {});
      //console.log(testdata)
      //.subscribe(res => {
      //   for (let index = 0; index < res.length; index++) {
      //     console.log("Akhil");
      //     data.push(res[index]);
      //   }
  
      // });
      // console.log(this.pData.length)
      // this.products = [];

      // for(let i = 0; i < this.pData.length; i++){
      //     this.products.push(this.pData[i]);
      // }
      // console.log(this.products.length);
      //console.log("Data"+ this.pData.length);
      return data;
  }

  addToCart(product: Product, quantity:number):void{
    const cost:number = product.price * quantity;
    let updatedQuantity:number = parseInt(quantity as unknown as string);
    let isContains : boolean = false;
    for(let i = 0; i < this.cartItems.length; i++){
        if(this.cartItems[i].product.id === product.id){
          isContains = true;
          console.log(this.cartItems[i].quantity);
          updatedQuantity = updatedQuantity + parseInt(this.cartItems[i].quantity as unknown as string) ;
          let updatedPrice:number = product.price * updatedQuantity;
          this.cartItems[i].quantity = updatedQuantity;
          this.cartItems[i].totalCost = updatedPrice;
          break;
        }
    }
    if(!isContains){
      this.cartItems.push({ product : product , quantity: quantity, totalCost : cost});
    }
    

    
  }

  getCartItems(): CartItem[]{
    return this.cartItems;
  }

  getProductById(id: number):Product{
    let result:Product = new Product();
    let allProducts = this.getProducts();
    for(let i = 0 ; i < allProducts.length ; i++){
        if(allProducts[i].id===id){
          result = allProducts[i];
          break;
        }
    }
    return result;
  }

  updateQuantityInCartItem(item: CartItem){
    let items : CartItem[] = [];
    items = this.getCartItems();

    for(let i =0 ; i< items.length ; i++){
      if(items[i].product.id === item.product.id){
        this.setCartItem(i,item);
      }
    }
    this.totalCartCost = this.getTotalCartCost();
  }

  setCartItem(index: number , item : CartItem){
    this.cartItems[index].product = item.product;
    this.cartItems[index].quantity = item.quantity;
    this.cartItems[index].totalCost = item.product.price*item.quantity;
  }

  getTotalCartCost():number{
    let totalCost = 0;
    this.cartItems.forEach(element => {
      totalCost += element.totalCost;
    });
    return totalCost;
  }

  clearCartItems(){
    this.cartItems = [];
  }

  getCartSize():number{
    return this.cartItems.length;
  }

  removeItem(item : CartItem):void{
    let items : CartItem[] = [];
    items = this.getCartItems();

    for(let i =0 ; i< items.length ; i++){
      if(items[i].product.id === item.product.id){
        this.cartItems.splice(i,1);
        break;
      }
    }
    this.totalCartCost=this.getTotalCartCost();
  }

 
}