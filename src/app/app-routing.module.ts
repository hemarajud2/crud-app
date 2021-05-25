import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaysComponent } from './booking/says/says.component';
import { FlightsComponent } from './booking/flights/flights.component';
import { FlightHotelComponent } from './booking/flight-hotel/flight-hotel.component';
import { CarRentalComponent } from './booking/car-rental/car-rental.component';
import { AirportTaxisComponent } from './booking/airport-taxis/airport-taxis.component';
import { AttractionsComponent } from './booking/attractions/attractions.component';
import { BookingComponent } from './booking/booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"booking", component:BookingComponent},
  {path:"stays", component:SaysComponent},
  {path:"flights", component:FlightsComponent},
  {path:"flighthotel", component:FlightHotelComponent},
  {path:"car-rental", component:CarRentalComponent},
  {path:"Attractions", component:AttractionsComponent},
  {path:"airport-taxis", component:AirportTaxisComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

