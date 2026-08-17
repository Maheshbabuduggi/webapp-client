import {
  inject
} from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import {
  catchError,
  map,
  of
} from 'rxjs';

import {
  AuthService
} from '../auth';


export const authGuard:
  CanActivateFn = () => {

    const authService =
      inject(AuthService);

    const router =
      inject(Router);


    return authService
      .getCurrentUser()
      .pipe(

        map(user => {

          if (user) {
            return true;
          }

          return router.createUrlTree([
            '/login'
          ]);
        }),


        catchError(() => {

          return of(
            router.createUrlTree([
              '/login'
            ])
          );

        })
      );
  };