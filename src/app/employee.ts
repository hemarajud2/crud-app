export class Employee {
     Emp_Id: number;
     Emp_Name: string;
     Emp_Gender: boolean;
     Emp_Deptno: number;
     Emp_Salary: number;
     Emp_Deptname: string;
    constructor(Emp_Id: number,Emp_Name: string,Emp_Gender: boolean,Emp_Deptno: number,Emp_Salary: number,Emp_Deptname: string){
        this.Emp_Id = Emp_Id;
        this.Emp_Name = Emp_Name;
        this. Emp_Gender =  Emp_Gender;
        this.Emp_Deptno = Emp_Deptno;
        this.Emp_Salary = Emp_Salary;
        this.Emp_Deptname = Emp_Deptname;



    }

}
export class Department {
  Dept_No: number;
  Dept_Name: string;
  Dept_Location: string;
  constructor(Dept_No: number,Dept_Name: string, Dept_Location: string){
    this.Dept_No =  Dept_No;
    this.Dept_Name = Dept_Name;
    this.Dept_Location = Dept_Location;


  }

}
