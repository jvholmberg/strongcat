import { NgModule } from '@angular/core';

import { UnauthorizedComponent } from './unauthorized.component';

@NgModule({
  declarations: [
    UnauthorizedComponent,
  ],
  exports: [UnauthorizedComponent],
})
export class UnauthorizedModule { }
