import Product from "./Product";

export default class DétailPanier {
    product:Product;
    q:Number;

    constructor(product:Product,q:Number){
        this.product=product;
        this.q=q;
    }
    
}