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


// ------------------------------------------------
// HR GUARD
// ------------------------------------------------

export const hrGuard:
  CanActivateFn = () => {

    const authService =
      inject(AuthService);

    const router =
      inject(Router);


    return authService
      .getCurrentUser()
      .pipe(

        map(user => {

          if (
            user.isAdmin ||
            user.isHr
          ) {
            return true;
          }


          return router.createUrlTree([
            '/dashboard'
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


// ------------------------------------------------
// HR MANAGER GUARD
// ------------------------------------------------

export const hrManagerGuard:
  CanActivateFn = () => {

    const authService =
      inject(AuthService);

    const router =
      inject(Router);


    return authService
      .getCurrentUser()
      .pipe(

        map(user => {

          if (
            user.isAdmin ||
            user.isHrManager
          ) {
            return true;
          }


          return router.createUrlTree([
            '/dashboard'
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