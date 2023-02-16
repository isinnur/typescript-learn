import { Product } from "./product";

export class SimpleDataSource{
    constructor(){
        this.product = new Array<Product>(
            new Product(1,"Samsung S5","Telefon",10000),
            new Product(2,"Samsung S6","Telefon",20000),
            new Product(3,"Samsung S7","Telefon",30000),
            new Product(4,"Samsung S8","Telefon",40000),
        );
    }

    getProducts():Product[]{
        return this.products;
    } 
}

//let p = new SimpleDataSource();