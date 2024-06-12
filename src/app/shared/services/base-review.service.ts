import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

/**
 * Service enabling better code organization
 * through inheritance.
 * @author geozi
 * @version 1
 */
@Injectable({
  providedIn: 'root',
})
export class BaseReviewService {
  http: HttpClient = inject(HttpClient);
  authService = inject(AuthService);
  tokenService = inject(TokenService);

  accessToken = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    }),
  };

  /**
   * Checks the validity of a token.
   */
  checkTokenValidity() {
    this.accessToken = this.tokenService.getToken();

    if (!this.accessToken) {
      console.log('No token found');
    } else {
      if (this.tokenService.isValid(this.accessToken)) {
        this.httpOptions.headers = this.httpOptions.headers.set(
          'Authorization',
          `Bearer ${this.accessToken}`
        );
      } else {
        console.log('Token expired. Logging out user');
        this.authService.logoutUser();
      }
    }
  }
}
