import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  declarations: [SessionComponent]
})
export class SessionModule { }
