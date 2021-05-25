import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  createUser(user: any){
  return this.http.post("http://localhost:3000/db",user);

  }
  getAllUser(){
    return this.http.get("http://localhost:3000/dat2");
  }
  updateUser(user: any){
    return this.http.put("http://localhost:3000/dat2/" +user.id,user);
  }
  deleteUser(user: any){
    return this.http.delete("http://localhost:3000/dat2/" +user.id);

  }

  

}
