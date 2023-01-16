import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../domaine/Product';

@Injectable({
  providedIn: 'root'
})
export class SupplyServiceService {

  constructor(private http: HttpClient) { }

  // async supply():Promise<any>{
  //   const p= await this.http.get(
  //     "https://dummyjson.com/products"
  //   ).toPromise();

  //   return JSON.parse(p).products
  //   return [
  //     new Product(1,"Smart TV",8000,true,"https://images.samsung.com/is/image/samsung/africa-fr-fhd-t5300-ua32t5300auxly-frontblack-243706532?$650_519_PNG$"),
  //     new Product(2,"Smart Fridge",7000,true,"https://cdn.thewirecutter.com/wp-content/media/2021/09/refrigerators-2048px-frigidaire-FFTR2021TS-topfreezer.jpg"),
  //     new Product(3,"Smart Dishwash",6000,false,"https://www.ubuy.ma/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFRak1JbTZxWEwuX0FDX1NMMTUwMF8uanBn.jpg"),
  //     new Product(4,"Smart Oven",5000,false,"https://images.thdstatic.com/productImages/8183fceb-5318-4350-9f4c-22bff03457c4/svn/stainless-steel-forno-single-oven-gas-ranges-ffsgs6275-30-a0_600.jpg"),
  // ];
  // }

   supply():any{
    return this.http.get(
      "https://fakestoreapi.com/products"
    );
  }

  getCategories():any{
    return this.http.get(
      "https://fakestoreapi.com/products/categories"
    );
  }

  getproductById(id:String):any{
    return this.http.get(
      'https://fakestoreapi.com/products/'+id
    );
  }

  getproductsByCat(cat:String):any{
    return this.http.get(
      'https://fakestoreapi.com/products/category/'+cat
    );
  }
  
}
