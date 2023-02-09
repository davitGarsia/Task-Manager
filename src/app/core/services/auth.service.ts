import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { BaseService } from './base.service';

import { HttpClient } from '@angular/common/http';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  cookieService: CookieService = inject(CookieService);

  get token(): string | null {
    return localStorage.getItem('token');
  }
  get user(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  login(payload: any): Observable<any> {
    return this.post<any>('auth/login', payload).pipe(
      tap((response: any) => {
        this.setToken(response.token.accessToken);
        this.setUser(response.user);
      })
    );
  }

  register(payload: any): Observable<User> {
    return this.post<User>('auth/signup', payload);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.clear();
  }
  signOut() {
    return this.post('auth/signout', {});
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.post<any>('auth/refresh', { refreshToken });
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  login2(payload: any): Observable<any> {
    return this.post<any>('auth/login', payload).pipe(
      tap((response: any) => {
        const expiereTime = 24 * 60 * 60 * 1000;
        const cookieExpire: any = new Date(Date.now() + expiereTime);

        this.cookieService.setCookie(
          'token',
          response.token.accessToken,
          cookieExpire
        );
        this.cookieService.setCookie(
          'refreshToken',
          response.token.refreshToken,
          cookieExpire
        );
        this.setUser(response.user);
      })
    );
  }
}
