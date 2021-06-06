import {Product} from './Product'

export class Order{
    id: number;
    totalCost: number;
    products: Product[];

    constructor(){
        this.id = 1;
        this.totalCost = 0;
        this.products = [];
    }
}