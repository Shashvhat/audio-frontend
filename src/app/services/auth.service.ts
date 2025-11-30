import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:8080/api/auth';

  private http = inject(HttpClient);

  login(credentials: { email: string; password: string }): Observable<any> {
    console.log(credentials);

    return this.http.post(`${this.BASE_URL}/login`, credentials);
  }

  signup(credentials: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    console.log(credentials);
    return this.http.post(`${this.BASE_URL}/signup`, credentials);
  }
}
