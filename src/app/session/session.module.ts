import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  declarations: [SessionComponent, FooterComponent]
})
export class SessionModule { }
