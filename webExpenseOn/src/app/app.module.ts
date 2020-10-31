import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { NavTopoComponent } from './components/nav-topo/nav-topo.component';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RatingModule } from 'ngx-bootstrap/rating';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    MenuVerticalComponent,
    NavTopoComponent,
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    ModalModule.forRoot(), //Modal ngx-bootstrap
    LoadingBarModule,
    RatingModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
