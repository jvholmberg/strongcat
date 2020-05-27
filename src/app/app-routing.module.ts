import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing';
import { AuthGuard } from './core/auth/auth.guard';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
