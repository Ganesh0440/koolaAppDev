import { AgmCoreModule } from '@agm/core';
import { GooglemapsComponent } from './../googlemaps/googlemaps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCreationRoutingModule } from './session-creation-routing.module';
import { SessionCreationComponent } from './session-creation.component';


@NgModule({
  imports: [
    CommonModule,
    SessionCreationRoutingModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyAyKLOJj9p_nzvYhSV4aR3JyIKnkjKdx0Y' 
      
    })
  ],
  declarations: [SessionCreationComponent, GooglemapsComponent]
})
export class SessionCreationModule { }
