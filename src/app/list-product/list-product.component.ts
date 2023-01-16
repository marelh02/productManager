import { Component, OnInit } from '@angular/core';
import Product from '../domaine/Product';
import { SupplyServiceService } from '../services/supply-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ngOnInit(): void {
    this.getStock();
  }

  constructor(private supplyService: SupplyServiceService) { }
  products: Product[] = []
  categories: String[] = []
  panier: Product[] = []


  filter(x: string): void {
    console.log("Filter act");
    
    this.supplyService.getproductsByCat(x).subscribe(
      (response: any) => {
        console.log('categ products received man')

        this.products = (response).map((x: {
          category: string; id: number; title: string; price: number; image: string;
        }) => new Product(x.id, x.title, x.price, true, x.category, x.image))
      },
      (error: any) => {
        console.error('cannot get the cat products man')
      });
    
  }

  getStock(): void {
    this.supplyService.supply().subscribe(
      (response: any) => {
        console.log('products received man')

        this.products = (response).map((x: {
          category: string; id: number; title: string; price: number; image: string;
        }) => new Product(x.id, x.title, x.price, true, x.category, x.image))
      },
      (error: any) => {
        console.error('cannot get the products man')
      });

    this.supplyService.getCategories().subscribe(
      (response: String[]) => {
        console.log('categories received man')
        this.categories = response;
      },
      (error: any) => {
        console.error('cannot get the categories man')
      });
    }

  ajouterProduit(p: Product) {
    this.panier.push(p)
    this.panier.forEach(element => {
      console.log(element.title);
    })
  }
}
