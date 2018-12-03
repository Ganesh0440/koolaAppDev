import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCreationRoutingModule } from './session-creation-routing.module';
import { SessionCreationComponent } from './session-creation.component';

@NgModule({
  imports: [
    CommonModule,
    SessionCreationRoutingModule
  ],
  declarations: [SessionCreationComponent]
})
export class SessionCreationModule { }
