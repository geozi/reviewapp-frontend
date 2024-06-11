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

  accessToken = this.tokenService.getToken();
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
    if (this.accessToken && !this.tokenService.isValid(this.accessToken)) {
      this.authService.logoutUser();
    }
  }
}
