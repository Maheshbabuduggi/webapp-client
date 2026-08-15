import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterOutlet],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
        
  }
/*
 onSubmit(): void {
  if (this.loginForm.invalid) return;

  this.loading = true;
  this.errorMessage = '';

  this.authService.login(this.loginForm.value).subscribe({
    next: (res) => {
      console.log('LOGIN SUCCESS:', res);

      this.loading = false;

      alert('Login successful: ' + res.name);
      
    },

    error: (err) => {
  console.log('ERROR CALLBACK START');

  this.loading = false;

  console.log('LOADING:', this.loading);


  if (err.status === 401) {
    this.errorMessage = 'Invalid username or password.';
  } else {
    this.errorMessage = 'Something went wrong. Please try again.';
  }

  console.log('ERROR CALLBACK END');
  console.log('Inside Angular zone?', NgZone.isInAngularZone());
}
  });
  
}
*/
onSubmit(): void {
  if (this.loginForm.invalid) return;

  this.loading = true;

  this.authService.login(this.loginForm.value).subscribe({
    next: (res) => {
      this.ngZone.run(() => {
        this.router.navigate(['/login-success'], {
          state: { name: res.name }
        });
      });
    },
    error: (err) => {
      this.ngZone.run(() => {
        const message = err.status === 401
          ? 'Invalid username or password.'
          : 'Something went wrong. Please try again.';
        this.router.navigate(['/login-error'], {
          state: { message }
        });
      });
    }
  });
}
}