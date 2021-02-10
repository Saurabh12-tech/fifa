import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStadiumsComponent } from './add-stadiums/add-stadiums.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'add-stadiums', component: AddStadiumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
