import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDetailsComponent } from './session-details.component';
import { SessionDetailsRoutingModule } from './session-details-routing.module';

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
    SessionDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    NgbModule.forRoot(),
    GooglemapsModule
  ],
  declarations: [SessionDetailsComponent],
  providers: [DatePipe],
})
export class SessionDetailsModule { }
