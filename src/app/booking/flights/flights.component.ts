import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  x : any;
  demo: any;
  demo1: any;
  onSwap(demo: any,demo1: any){
    this.demo1=demo;
    this.demo=demo1;
  }

public searchInput: any;
public flights = [
 'visakhapatnam','hyderabad','delhi','chennai','banguluru',
  'kerala','mumbai','gujarath','manali','bhubeneswar','jarkhand','assam','kasmeer'
]



  constructor() { 

  }

  ngOnInit()  {
  
  }


}
