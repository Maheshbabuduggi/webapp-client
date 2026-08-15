import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  standalone: true,
  template: `
    <div class="success-container">
      <h2>Welcome, {{ name }}!</h2>
      <p>You've successfully logged in.</p>
    </div>
  `,
  styleUrl: './login-success.css'
})
export class LoginSuccessComponent {
  name: string;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.name = nav?.extras.state?.['name'] ?? history.state?.['name'] ?? 'User';
  }
}