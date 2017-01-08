import { NgModule } from '@angular/core';

import { UserManagementComponent } from './user-management/user-management.component';
import { ListPageComponent } from './list-page/list-page.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        component: UserManagementComponent
    },
    { 
        path: 'userManagement', 
        component: UserManagementComponent 
    }
    ,
    { 
        path: 'placeManagement', 
        component: ListPageComponent 
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