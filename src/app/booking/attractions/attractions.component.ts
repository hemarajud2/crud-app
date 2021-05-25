import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
  users: Users[] = [];
  firstName: any;
  p: number = 1;
  constructor(public rs: RestService) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((res:Users[]) => {
      this.users = res;

   });
  }
  Search(){
    if(this.firstName == ""){
      
    }else{
      this.users = this.users.filter(res =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  
    key: string = 'id';
    reverse: boolean = false;
    sort(key: string){
      this.key = key;
      this.reverse = !this.reverse;
    }
  
}