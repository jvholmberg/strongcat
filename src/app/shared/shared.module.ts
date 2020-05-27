import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';



@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    ComponentsModule,
    PipesModule,
    DirectivesModule,
  ],
})
export class SharedModule { }
