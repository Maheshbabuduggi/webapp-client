import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  AuthService
} from '../auth';

import {
  CurrentUser
} from '../models/user.model';
import { HeaderComponent } from '../shared/header/header';


@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    RouterLink,HeaderComponent
  ],

  templateUrl: './dashboard.html',

  styleUrl: './dashboard.css'
})
export class DashboardComponent
  implements OnInit {

  user:
    CurrentUser | null = null;


  constructor(
    private authService:
      AuthService,

    private router:
      Router
  ) {}


  ngOnInit(): void {

    this.loadUser();
  }


  loadUser(): void {

    this.authService
      .getCurrentUser()
      .subscribe({

        next: user => {

          this.user = user;
        },


        error: () => {

          this.router.navigate([
            '/login'
          ]);
        }
      });
  }


  logout(): void {

    this.authService
      .logout()
      .subscribe({

        next: () => {

          this.router.navigate([
            '/login'
          ]);
        },


        error: () => {

          this.router.navigate([
            '/login'
          ]);
        }
      });
  }
}