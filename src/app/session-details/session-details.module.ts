import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDetailsComponent } from './session-details.component';
import { SessionDetailsRoutingModule } from './session-details-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SessionDetailsRoutingModule
  ],
  declarations: [SessionDetailsComponent]
})
export class SessionDetailsModule { }
