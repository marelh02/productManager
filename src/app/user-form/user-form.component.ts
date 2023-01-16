import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../domaine/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

constructor(private ls:LoginService,private router: Router){}

  user:User=new User("","","2000-01-01","","M","","")

pwd2:String="";


register(form:NgForm):void{
  
console.log(this.user);
this.ls.addUser(this.user)
this.ls.login(this.user.email,this.user.mdp)
this.router.navigateByUrl("home")

}

}
