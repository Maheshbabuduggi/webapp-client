import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-error',
  standalone: true,
  template: `
    <div class="error-container">
      <h2>Login Failed</h2>
      <p>{{ message }}</p>
      <button (click)="router.navigate(['/login'])">Try Again</button>
    </div>
  `,
  styleUrl: './login-error.css'
})
export class LoginErrorComponent {
  message: string;

  constructor(public router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.message = nav?.extras.state?.['message'] ?? history.state?.['message'] ?? 'Something went wrong.';
  }
}