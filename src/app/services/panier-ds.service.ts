import { Injectable } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';

@Injectable({
  providedIn: 'root'
})
export class PanierDSService {
  panier=new Map<Number,DétailPanier>;

  constructor() { }

  add(dp:DétailPanier):void{
    this.panier.set(dp.product.id,dp);
  }

  changeQuantity(id:Number,n:Number):void{
    let dp:any= this.panier.get(id);
    dp.q=n;
    this.panier.set(id,dp);
  }

  getAll():Map<Number,DétailPanier>{
    return this.panier;
  }
}
