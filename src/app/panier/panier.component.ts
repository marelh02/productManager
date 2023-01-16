import { Component, OnInit } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';
import { PanierDSService } from '../services/panier-ds.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  
constructor(private pdss:PanierDSService){}

panier=new Map<Number,DétailPanier>;

  ngOnInit(): void {
    this.panier=this.pdss.getAll();
  }

  qChange(id:String,x:String):void{
    this.pdss.changeQuantity(Number(id),Number(x));
  }

buyAction():void{
  let y:String=""
  let tot=0;
  this.pdss.getAll().forEach(x=>{
    y = y.concat(x.product.title+": "+x.product.price+" * "+x.q,"\n");
    tot+=x.product.price*Number(x.q)
  })
  alert("Voici votre commande:\n\n"+y+"\n"+"Le prix total est: "+tot)
}

prixT(x:number,y:string):number{
  return x*Number(y);
}

}
