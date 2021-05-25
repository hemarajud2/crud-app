
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department, Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeinfoService {

  constructor(private httpref: HttpClient) { }

  url : string = "http://localhost:3000/data";
  url1 : string = "http://localhost:3000/data1";

 GetEmployees() : Observable<Employee[]>{
  
  return this.httpref.get<Employee[]>(this.url);
}
GetDepartments(): Observable<Department[]>{
  return this.httpref.get<Department[]>(this.url1);
}

AddEmployee(emp : Employee[]){
  return this.httpref.post("http://localhost:3000/data",emp);
}



}
