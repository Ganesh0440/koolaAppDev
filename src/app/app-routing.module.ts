import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './session-creation/session-creation.module#SessionCreationModule' },
  { path: 'session-creation', loadChildren: './session-creation/session-creation.module#SessionCreationModule' },
  { path: 'session-details', loadChildren: './session-details/session-details.module#SessionDetailsModule' },
  { path: 'session-edit', loadChildren: './session-edit/session-edit.module#SessionEditModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
