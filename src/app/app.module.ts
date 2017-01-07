import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.route';
import { AppConfig } from './app.config';

import { MaterialModule } from '@angular/material';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';

import { AuthService } from './shared/auth.service';

import { AppComponent } from './app.component';
import { UserManagementComponent }  from './user-management/user-management.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { NavbarComponent } from './navbar/navbar.component';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    DialogLoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  entryComponents: [
    DialogLoginComponent
  ],
  providers: [
    {
      provide: 'AppConfig',
      useValue: AppConfig
    },
    AuthService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, RequestOptions]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
