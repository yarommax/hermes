import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = null;

  constructor(private httpClient: HttpClient) {}

  register(body: User): Observable<User> {
    return this.httpClient.post<User>('api/auth/registration', body);
  }

  login(body: User): Observable<{token: string}> {
    return this.httpClient.post<{token: string}>('api/auth/login', body)
      .pipe(
        tap(
          ({ token }) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          },
        ),
      );
  }

  getUserFromRequest() {
    return this.httpClient.get('api/auth/user');
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}
