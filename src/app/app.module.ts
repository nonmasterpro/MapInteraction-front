import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.route';
import { AppConfig } from './app.config';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    {
      provide: 'AppConfig',
      useValue: AppConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
