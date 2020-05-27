import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from '@routes/login';
import { UnauthorizedModule } from '@routes/unauthorized';
import { NotFoundModule } from '@routes/not-found';
import { ProfileModule } from '@routes/profile';
import { LandingModule } from '@routes/landing';
import { DashboardModule } from '@routes/dashboard';

import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    LoginModule,
    DashboardModule,
    ProfileModule,
    UnauthorizedModule,
    NotFoundModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
