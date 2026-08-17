import {
  HttpInterceptorFn
} from '@angular/common/http';

import {
  catchError,
  throwError
} from 'rxjs';

import {
  inject
} from '@angular/core';

import {
  Router
} from '@angular/router';


export const authInterceptor:
  HttpInterceptorFn =
  (req, next) => {

    const router =
      inject(Router);


    // --------------------------------------------
    // Send authentication cookie
    // --------------------------------------------

    const request =
      req.clone({
        withCredentials: true
      });


    return next(request).pipe(

      catchError(error => {

        // ----------------------------------------
        // Authentication expired
        // ----------------------------------------

        if (
          error.status === 401
          &&
          !req.url.includes('/Login')
        ) {

          router.navigate([
            '/login'
          ]);
        }


        // ----------------------------------------
        // Authorization failure
        // ----------------------------------------

        if (
          error.status === 403
        ) {

          router.navigate([
            '/dashboard'
          ]);
        }


        return throwError(
          () => error
        );
      })
    );
  };