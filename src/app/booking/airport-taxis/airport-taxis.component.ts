import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-airport-taxis',
  templateUrl: './airport-taxis.component.html',
  styleUrls: ['./airport-taxis.component.css']
})
export class AirportTaxisComponent implements OnInit {
  [x: string]: any;
  alert: boolean= false;
  allUser: any;
  name: any;
  isEdit = false;
  userObj :any = {
    name:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }

 
  constructor(private commonService: CommonService) { }
  onload(){
    var element: any = document.getElementById('table')
    html2canvas(element).then((canvas) =>{
      console.log(canvas)
    var imgData = canvas.toDataURL('image/png')
    var doc = new jsPDF()
    var imgHeight = canvas.height * 208/canvas.width;
    doc.addImage(imgData,0,0,208,imgHeight)
    doc.save("image.pdf")
   });
   }
  ngOnInit(): void {
    this.getLatestUser();
  }

  getLatestUser(){
  this.commonService.getAllUser().subscribe((Response) =>{
    this.allUser = Response;
    
  });
}


addUser(formObj: any){
  console.log(formObj)
  this.commonService.createUser(formObj).subscribe((Response) =>{
    console.log("user hasbeen added")
    this.getLatestUser();
    this.alert = true;
    this.reset();   
  });
}


reset(){
  this.userObj={} 
}

editUser(user: any){
  this.isEdit = true;
  this.userObj = user;
}

updateUser(){
  this.isEdit = !this.isEdit;
  this.commonService.updateUser(this.userObj).subscribe(() =>{
    this.getLatestUser();
    this.reset();
  })
}

deleteUser(user: any){
  this.commonService.deleteUser(user).subscribe(()=>{
    this.getLatestUser();
  });
}

closeAlert(){
  this.alert = false;
}

Search(){
  if(this.name == ""){
    
  }else{
    this.allUser = this.allUser.filter((data: any) =>{
      return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}



}
