import { NgModule } from '@angular/core';

import { UserManagementComponent } from './user-management/user-management.component';
import { PlacesManagementComponent } from './places-management/places-management.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { ListplaceComponent } from './list-place/list-place.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      component: UserManagementComponent
    },
    {
      path: 'member/add',
      component: MemberManagementComponent
    },
    {
      path: 'member/edit/:id',
      component: MemberManagementComponent
    },
    { 
      path:'test',
      component : PlacesManagementComponent
    },
    {
      path: 'list/:action',
      component: ListplaceComponent
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