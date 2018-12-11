

import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './../googlemaps/googlemaps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCreationRoutingModule } from './session-creation-routing.module';
import { SessionCreationComponent } from './session-creation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { OnetimecalenderComponent } from './../calendar/onetimecalender/onetimecalender.component';
import { EverydayComponent } from './../calendar/everyday/everyday.component';
import { QuarterlyComponent } from './../calendar/quarterly/quarterly.component';
import { HalfyearlyComponent } from './../calendar/halfyearly/halfyearly.component';
import { AnnuallyComponent } from './../calendar/annually/annually.component';
import { WeeklyComponent } from './../calendar/weekly/weekly.component';
import { ByweeklyComponent } from './../calendar/byweekly/byweekly.component';
import { MonthlyComponent } from './../calendar/monthly/monthly.component';
import { ValidatorComponentComponent } from './../calendar/validator-component/validator-component.component';
import { SelectYearComponent } from './../calendar/select-year/select-year.component';
import { MultiDatePickerComponent } from './../calendar/multi-date-picker/multi-date-picker.component';
import { CalendarComponent } from './../calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    SessionCreationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyKLOJj9p_nzvYhSV4aR3JyIKnkjKdx0Y'

    })
  ],
  declarations: [SessionCreationComponent, GooglemapsComponent,
    CalendarComponent,
    OnetimecalenderComponent,
    EverydayComponent,
    QuarterlyComponent,
    HalfyearlyComponent,
    AnnuallyComponent,
    WeeklyComponent,
    ByweeklyComponent,
    MonthlyComponent,
    ValidatorComponentComponent,
    SelectYearComponent,
    MultiDatePickerComponent
  ],
  providers: [DatePipe],
})
export class SessionCreationModule { }
