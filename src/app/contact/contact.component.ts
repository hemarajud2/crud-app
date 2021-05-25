import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
orderStatus: any;
orderStatuss: any;
  data: Observable<any> | undefined;
  data1: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {

    this.data = new Observable(observer => {
    
      setTimeout(() => {
      observer.next('Hemaraju');
      },2000);

      setTimeout(() => {
        observer.next('Ramaraju');
        },4000);

      setTimeout(() => {
          observer.next('bhaskar');
          },8000);

      setTimeout(() => {
          observer.complete(); //it will no more listen tor track for canges
          },8000);
          setTimeout(() => {
            observer.next('Ramaraju');
            },4000);
    
    });
  
    this.data1 = new Observable(observer => {
    
      setTimeout(() => {
      observer.next('ramaraju');
      },2000);

      setTimeout(() => {
        observer.next('hemaraju');
        },4000);

      setTimeout(() => {
          observer.next('surya');
          },8000);

    });

    this.data.subscribe(val => {   
      this.orderStatus = val;    //this is first subscription
    });

    this.data1.subscribe(val1 => {
       this.orderStatuss = val1;   //this is second subscription
    });
  }

  

} 
