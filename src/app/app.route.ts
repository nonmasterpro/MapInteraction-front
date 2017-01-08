import { NgModule } from '@angular/core';

import { UserManagementComponent } from './user-management/user-management.component';
import { PlacesManagementComponent } from './places-management/places-management.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { ListPageComponent } from './list-page/list-page.component';

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
      path:'test',
      component : PlacesManagementComponent
    },
    {
      path: 'placelist',
      component: ListPageComponent
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