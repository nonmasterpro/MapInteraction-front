import { NgModule } from '@angular/core';

import { UserManagementComponent } from './user-management/user-management.component';
import { BusRoutesManagementComponent } from './bus-routes-management/bus-routes-management.component';
import { PlacesManagementComponent } from './places-management/places-management.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { ListplaceComponent } from './list-place/list-place.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { MemberScheduleComponent } from './member-schedule/member-schedule.component';
import { ListRoutesComponent } from './list-routes/list-routes.component';
import { ListStationComponent } from './list-station/list-station.component';
import { StationManagementComponent } from './station-management/station-management.component';
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
    path: 'place/:action',
    component: PlacesManagementComponent
  },
  {
    path: 'place/edit/:id',
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
    path: 'route',
    component: ListRoutesComponent
  },
  {
    path: 'route/:action',
    component: BusRoutesManagementComponent
  },
  {
    path: 'route/edit/:id',
    component: BusRoutesManagementComponent
  },
  {
    path: 'station',
    component: ListStationComponent
  },
  {
    path: 'station/:action',
    component: StationManagementComponent
  },
  {
    path: 'station/edit/:id',
    component: StationManagementComponent
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
