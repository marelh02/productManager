import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DétailPanier from '../domaine/DétailPanier';
import Product from '../domaine/Product';
import { PanierDSService } from '../services/panier-ds.service';
import { SupplyServiceService } from '../services/supply-service.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit{
  
  ngOnInit(): void {
      let id=this.route.snapshot.params['id'];
      this.supplyService.getproductById(id).subscribe(
        (res: any)=>{
          this.produit=res
          this.l=true        
        }
      )
  }

  constructor(
    private supplyService:SupplyServiceService,
    private route:ActivatedRoute,
    private pdss: PanierDSService
  ){}
  produit:any=undefined;
  l=false

  addNewItem() {
    alert("Le produit est ajouté au panier");
    console.log(this.produit);
    this.pdss.add(new DétailPanier(this.produit,1));
  }
}