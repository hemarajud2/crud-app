
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee,Department } from 'src/app/employee';
import { EmployeeinfoService } from 'src/app/employeeinfo.service';



@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
   
   emplist: Employee[] = [];
   department: Department[] = [];
  GetEmployees: any;
   myform: FormGroup;
   result: any;
  constructor(public serviceref: EmployeeinfoService, frmbldr : FormBuilder) {
   this.myform = frmbldr.group({
     Emp_Name: new FormControl(),
     Emp_Gender : new FormControl(),
     Emp_Deptno: new FormControl(),
     Emp_Salary : new FormControl()

   })
  }

  ngOnInit(): void {
  
    this.GetEmployeesData();

//filling department drowdownlist
   this.serviceref.GetDepartments().subscribe((res:Department[]) =>{
    this.department = res;
  });
  }


CreateEmp(){
  debugger;
 console.log(this.myform);
 if(this.myform.value["Emp_gender"]=="Male")this.myform.value["Emp_Gender"]=false;
 else this.myform.value["Emp_Gender"]= true;
  this.serviceref.AddEmployee(this.myform.value).subscribe(x =>{
    this.GetEmployeesData();
  });
}


 GetEmployeesData(){
  this.serviceref.GetEmployees().subscribe((res:Employee[]) =>{
    this.emplist = res;
  });
 }

}
