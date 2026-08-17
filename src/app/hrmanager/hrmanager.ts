import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { CurrentUser } from '../models/user.model';
import { HeaderComponent } from '../shared/header/header';

@Component({
  selector: 'app-hr-manager',
  standalone: true,
  imports: [HeaderComponent, DatePipe],
  templateUrl: './hrmanager.html',
  styleUrl: './hrmanager.css'
})
export class HrManagerComponent implements OnInit {
  data: any = null;
  user: CurrentUser | null = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: user => this.user = user,
      error: () => this.router.navigate(['/login'])
    });

    this.http.get('https://localhost:7065/api/HrManager').subscribe({
      next: response => this.data = response,
      error: error => console.error('HR Manager API error:', error)
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.router.navigate(['/login'])
    });
  }
}