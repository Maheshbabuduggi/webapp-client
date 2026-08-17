import {
  Component
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import {
  AuthService
} from '../auth';

import {
  Credentials
} from '../models/credentials.model';


@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    FormsModule
  ],

  templateUrl: './login.html',

  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';

  password = '';

  loading = false;

  errorMessage = '';


  constructor(
    private authService:
      AuthService,

    private router:
      Router
  ) {}


  login(): void {

    this.errorMessage = '';

    this.loading = true;


    const credentials:
      Credentials = {

      username:
        this.username,

      password:
        this.password
    };


    this.authService
      .login(credentials)
      .subscribe({

        next: response => {

          this.loading = false;

          console.log(
            'Login successful:',
            response
          );


          this.router.navigate([
            '/dashboard'
          ]);
        },


        error: error => {

          this.loading = false;

          this.errorMessage =
            error?.error?.message
            ??
            'Login failed.';
        }
      });
  }
}