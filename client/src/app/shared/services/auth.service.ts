import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CreateUser, User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = null;

  constructor(private httpClient: HttpClient) {}

  register(body: CreateUser): Observable<CreateUser> {
    return this.httpClient.post<CreateUser>('api/auth/registration', body);
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
