import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.route';
import { AppConfig } from './app.config';

import { MaterialModule } from '@angular/material';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { NgUploaderModule } from 'ngx-uploader';

import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';

import { AppComponent } from './app.component';
import { UserManagementComponent }  from './user-management/user-management.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlacesManagementComponent } from './places-management/places-management.component';
import { ManageComponent } from './manage/manage.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { ListComponent } from './list/list.component';
import { ListplaceComponent } from './list-place/list-place.component';


import { SimpleNotificationsModule } from 'angular2-notifications';
import { ListMemberComponent } from './list-member/list-member.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { MemberScheduleComponent } from './member-schedule/member-schedule.component';
import { SearchPipe } from './search.pipe';

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
    PlacesManagementComponent,
    DialogLoginComponent,
    NavbarComponent,
    ManageComponent,
    MemberManagementComponent,
    ListComponent,
    ListplaceComponent,
    ListMemberComponent,
    ScheduleManagementComponent,
    MemberScheduleComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    NgUploaderModule,
    ReactiveFormsModule,
    SimpleNotificationsModule
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
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
