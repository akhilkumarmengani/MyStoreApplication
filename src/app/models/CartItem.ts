import { Product } from '../models/Product'
export class CartItem{
    product : Product;
    quantity  : number;
    totalCost : number;
    constructor(){
        this.product = new Product();
        this.quantity = 1;
        this.totalCost = 1;
    }
}