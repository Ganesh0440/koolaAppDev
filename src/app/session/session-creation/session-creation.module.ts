import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './../googlemaps/googlemaps.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SessionCreationRoutingModule } from './session-creation-routing.module';
import { SessionCreationComponent } from './session-creation.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnetimecalenderComponent } from '../../calender/onetimecalender/onetimecalender.component';
import { DatePipe } from '@angular/common';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EverydayComponent } from '../../calender/everyday/everyday.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { QuarterlyComponent } from '../../calender/quarterly/quarterly.component';
import { HalfyearlyComponent } from '../../calender/halfyearly/halfyearly.component';
import { AnnuallyComponent } from '../../calender/annually/annually.component';
import { WeeklyComponent } from '../../calender/weekly/weekly.component';
import { ByweeklyComponent } from '../../calender/byweekly/byweekly.component';
import { MonthlyComponent } from '../../calender/monthly/monthly.component';
import { ValidatorComponentComponent } from '../../calender/validator-component/validator-component.component';
import { SelectYearComponent } from '../../calender/select-year/select-year.component';
import { MultiDatePickerComponent } from '../../calender/multi-date-picker/multi-date-picker.component';
import { CalenderComponent } from './../../calender/calender.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SessionCreationRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyKLOJj9p_nzvYhSV4aR3JyIKnkjKdx0Y'

    })
  ],
  declarations: [SessionCreationComponent, GooglemapsComponent,
    CalenderComponent,
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
