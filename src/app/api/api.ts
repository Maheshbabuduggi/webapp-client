import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl =
    'https://localhost:7065/api';

  constructor(
    private http: HttpClient
  ) {}

  getHr(): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/Hr`,
      {
        withCredentials: true
      }
    );
  }

  getHrManager(): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/HrManager`,
      {
        withCredentials: true
      }
    );
  }
}