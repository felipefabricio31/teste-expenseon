import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HotelComponent },
      { path: 'hoteis', component: HotelComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
