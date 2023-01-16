import { Injectable } from '@angular/core';
import User from '../domaine/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  accounts:User[]=[new User("Elhilali","Marouane","2000-01-01","0009090909","M","store@gmail.com","mystore"),]

  getCookie(cname:String):String {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  login(mail:String,pwd:String):boolean{
    console.log(this.accounts);
    
    for(let x of this.accounts){
      if(x.email===mail && x.mdp===pwd){
        document.cookie="loged=true"        
        return true;
      }
    }
    document.cookie="loged="
    return false    
  }

  logout():void{
    document.cookie="loged="
  }

  logedStatus():boolean{
    return this.getCookie("loged") == "true" ? true : false;
  }

  addUser(u:User):void{
    this.accounts.push(u)
  }
}
