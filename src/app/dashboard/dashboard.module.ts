import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';

import { DashboardComponent } from './dashboard.component';
import { CreateSessionComponent } from './create-session/create-session.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateSessionComponent,
  ],
  imports: [
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
