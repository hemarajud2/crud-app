import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //checkoutForm: FormGroup | undefined;
  

  constructor(public srvc : CommonService,public rtr : Router) { }

  ngOnInit(): void {
  }
  loginfrm = new FormGroup({
    uname : new FormControl(),
    pwd : new FormControl()
  })

  CheckUser(){
   
   var res = this.srvc.ValidateUser(this.loginfrm.value["uname"],this.loginfrm.value["pwd"]);
   if(res){
     this.rtr.navigate(["flights"]);
   }
   
   else{
     alert("invalid user");
   }
  }
  

  }


