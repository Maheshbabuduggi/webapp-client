import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { LoginErrorComponent } from './login-error/login-error';
import {LoginSuccessComponent} from './login-success/login-success';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'login-error', component: LoginErrorComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];