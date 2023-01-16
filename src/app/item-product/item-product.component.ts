import { Component, EventEmitter, Input, Output } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';
import Product from '../domaine/Product';
import { PanierDSService } from '../services/panier-ds.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent {
  constructor(private pdss: PanierDSService){}

  @Input() produit:Product=new Product(0,"",0,true,"","");
  // @Output() productSelected = new EventEmitter<Product>();

  addNewItem() {
    alert("Le produit est ajouté au panier");
    console.log(this.produit);
    this.pdss.add(new DétailPanier(this.produit,1));
  }
}