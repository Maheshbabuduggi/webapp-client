import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials, LoginResponse } from './models/credentials.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://localhost:7065/api/Login';

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, credentials, {
      withCredentials: true // required so the auth cookie is sent/stored
    });
  }
}