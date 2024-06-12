import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { LoggedInUser } from '../interfaces/logged-in-user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Credentials } from '../interfaces/credentials';
import { Observable } from 'rxjs';

const AUTH_URL = 'http://localhost:8080/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

/**
 * Service providing authentication (login, logout) functionalities.
 * @author geozi
 * @version 1
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);

  user = signal<LoggedInUser | null>(null);
  router = inject(Router);

  constructor() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const decodedTokenSubject = jwtDecode(accessToken).sub as string;
      this.user.set({
        username: decodedTokenSubject,
      });
    }

    effect(() => {
      if (this.user()) {
        console.log('User logged in as', this.user().username);
      } else {
        console.log('No User logged in');
      }
    });
  }

  /**
   * Performs a login request.
   * @param credentials The authentication details of the user.
   * @returns An observable representing the HTTP response from the backend.
   */
  loginUser(credentials: Credentials): Observable<any> {
    const url = `${AUTH_URL}/login`;
    return this.http.post(url, credentials, httpOptions);
  }

  /**
   * Performs a logout request.
   */
  logoutUser() {
    this.user.set(null);
    localStorage.removeItem('accessToken');
    this.router.navigate(['login-form']);
  }
}
