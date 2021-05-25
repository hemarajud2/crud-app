import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';


const MaterialComponent = [
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatNativeDateModule,
 
  
  
 
];


@NgModule({
  declarations: [],
  imports: [
    
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule
    
   
  ],
  exports: [
    
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule
    
   
    ]
})
export class MaterialModule { }
