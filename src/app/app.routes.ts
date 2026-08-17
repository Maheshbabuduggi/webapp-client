import {
  Routes
} from '@angular/router';

import {
  LoginComponent
} from './login/login';

import {
  DashboardComponent
} from './dashboard/dashboard';

import {
  HrComponent
} from './hr/hr';

// import {
//   HrManagerComponent
// } from './hr-manager/hr-manager.component';

// import {
//   authGuard
// } from './guards/auth.guard';
import{HrManagerComponent}from'./hrmanager/hrmanager';
import{authGuard}from'./guards/auth-guard';
import{hrGuard}from'./guards/role-guard';
import{hrManagerGuard}from'./guards/role-guard';  

export const routes: Routes = [

  // ---------------------------------------------
  // Default
  // ---------------------------------------------

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  // ---------------------------------------------
  // Login
  // ---------------------------------------------

  {
    path: 'login',
    component: LoginComponent
  },


  // ---------------------------------------------
  // Dashboard
  // ---------------------------------------------

  {
    path: 'dashboard',

    component:
      DashboardComponent,

    canActivate: [
      authGuard
    ]
  },


  // ---------------------------------------------
  // HR
  // ---------------------------------------------

  {
    path: 'hr',

    component:
      HrComponent,

    canActivate: [
      authGuard,
      hrGuard
    ]
  },


  // ---------------------------------------------
  // HR Manager
  // ---------------------------------------------

  {
    path: 'hr-manager',

    component:
      HrManagerComponent,

    canActivate: [
      authGuard,
      hrManagerGuard
    ]
  },


  // ---------------------------------------------
  // Unknown
  // ---------------------------------------------

  {
    path: '**',
    redirectTo: 'login'
  }
];