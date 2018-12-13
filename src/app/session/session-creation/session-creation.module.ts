//import { GooglemapsComponent } from './../googlemaps/googlemaps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCreationRoutingModule } from './session-creation-routing.module';
import { SessionCreationComponent } from './session-creation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CalendarModule } from './../calendar/calendar.module';
import { GooglemapsModule } from './../googlemaps/googlemaps.module';


@NgModule({
  imports: [
    CalendarModule,
    CommonModule,
    SessionCreationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    NgbModule.forRoot(),
    GooglemapsModule
  ],
  declarations: [SessionCreationComponent],
  providers: [DatePipe],
})
export class SessionCreationModule { }
