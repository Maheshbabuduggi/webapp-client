import { Component, OnInit ,signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { CurrentUser } from '../models/user.model';
import { HeaderComponent } from '../shared/header/header';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [HeaderComponent, DatePipe],
  templateUrl: './hr.html',
  styleUrl: './hr.css'
})
export class HrComponent implements OnInit {
  data=signal<any>(null);
  user=signal<CurrentUser | null>(null);

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: user => this.user.set(user),
      error: () => this.router.navigate(['/login'])
    });

    this.http.get('https://localhost:7065/api/Hr').subscribe({
      next: response => this.data.set(response),
      error: error => console.error('HR API error:', error)
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.router.navigate(['/login'])
    });
  }
}