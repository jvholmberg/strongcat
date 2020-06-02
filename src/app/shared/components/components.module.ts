import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { ImageCardComponent } from '@shared/components/image-card/image-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ImageCardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ImageCardComponent,
  ]
})
export class ComponentsModule { }
