import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';
import { Router } from '@angular/router';
import { MaterialService } from '../etc/material.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = null;

  constructor(private httpClient: HttpClient,
              private router: Router) {}

  register(body: User): Observable<User> {
    return this.httpClient.post<User>('api/auth/registration', body);
  }

  login(body: User): Observable<any> {
    return this.httpClient.post<any>('api/auth/login', body)
      .pipe(
        tap(
          ({ newUser, token }) => {
            localStorage.setItem('user_name', newUser.username);
            localStorage.setItem('user_email', newUser.email);
            localStorage.setItem('user_id', newUser.userId);
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          },
        ),
      );
  }

  getUserInfo(): Observable<User> {
    return this.httpClient.get<User>('api/auth/user');
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
    this.router.navigate(['/login'], {
      queryParams: {
        logout: true,
      },
    });
    MaterialService.toast('Logged out');
    this.setToken(null);
    localStorage.clear();
  }
}
