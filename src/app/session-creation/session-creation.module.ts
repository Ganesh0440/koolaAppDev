import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './../googlemaps/googlemaps.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SessionCreationRoutingModule } from './session-creation-routing.module';
import { SessionCreationComponent } from './session-creation.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './../main/main.component';
import { OnetimecalenderComponent } from './../onetimecalender/onetimecalender.component';
import { DatePipe } from '@angular/common';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EverydayComponent } from './../everyday/everyday.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { QuarterlyComponent } from './../quarterly/quarterly.component';
import { HalfyearlyComponent } from './../halfyearly/halfyearly.component';
import { AnnuallyComponent } from './../annually/annually.component';
import { WeeklyComponent } from './../weekly/weekly.component';
import { ByweeklyComponent } from './../byweekly/byweekly.component';
import { MonthlyComponent } from './../monthly/monthly.component';
import { ValidatorComponentComponent } from './../validator-component/validator-component.component';
import { SelectYearComponent } from './../select-year/select-year.component';
import { MultiDatePickerComponent } from './../multi-date-picker/multi-date-picker.component';


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
    MainComponent,
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
