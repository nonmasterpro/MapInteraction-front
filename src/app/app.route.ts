import { NgModule } from '@angular/core';

import { UserManagementComponent } from './user-management/user-management.component';
import { PlacesManagementComponent } from './places-management/places-management.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { ListplaceComponent } from './list-place/list-place.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { MemberScheduleComponent } from './member-schedule/member-schedule.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: UserManagementComponent
  },
  {
    path: 'member/:action',
    component: MemberManagementComponent
  },
  {
    path: 'member/edit/:id',
    component: MemberManagementComponent
  },
  {
    path: 'test',
    component: PlacesManagementComponent
  },
  {
    path: 'place',
    component: ListplaceComponent
  },
  {
    path: 'member',
    component: ListMemberComponent
  },
  {
    path: 'schedule',
    component: MemberScheduleComponent
  },
  {
    path: '**',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
