import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaysComponent } from './booking/says/says.component';
import { FlightsComponent } from './booking/flights/flights.component';
import { FlightHotelComponent } from './booking/flight-hotel/flight-hotel.component';
import { CarRentalComponent } from './booking/car-rental/car-rental.component';
import { AirportTaxisComponent } from './booking/airport-taxis/airport-taxis.component';
import { AttractionsComponent } from './booking/attractions/attractions.component';
import { BookingComponent } from './booking/booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { SearchPipe } from './search.pipe';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule  } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingGenderPipe } from './setting-gender.pipe';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SaysComponent,
    FlightsComponent,
    FlightHotelComponent,
    CarRentalComponent,
    AirportTaxisComponent,
    AttractionsComponent,
    BookingComponent,
    SearchPipe,
    LoginComponent,
    ContactComponent,
    SettingGenderPipe,
    HoverDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
