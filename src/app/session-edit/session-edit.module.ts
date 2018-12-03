import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionEditRoutingModule } from './session-edit-routing.module';
import { SessionEditComponent } from './session-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SessionEditRoutingModule
  ],
  declarations: [SessionEditComponent]
})
export class SessionEditModule { }
