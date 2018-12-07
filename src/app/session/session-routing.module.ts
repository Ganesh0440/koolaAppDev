import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session.component';

const router: Routes = [
  {
    path: '', component: SessionComponent,
    children: [
      { path: '', redirectTo: 'session-creation', pathMatch: 'prefix' },
      { path: 'session-creation', loadChildren: './session-creation/session-creation.module#SessionCreationModule' },
      { path: 'session-details', loadChildren: './session-details/session-details.module#SessionDetailsModule' },
      { path: 'session-edit', loadChildren: './session-edit/session-edit.module#SessionEditModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
