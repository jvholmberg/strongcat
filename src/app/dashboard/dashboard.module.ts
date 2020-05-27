import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { CreateSessionComponent } from './create-session/create-session.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateSessionComponent,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
