import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseReviewService {

  http: HttpClient = inject(HttpClient)
  authService = inject(AuthService)
  tokenService = inject(TokenService)
  
  accessToken = this.tokenService.getToken();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    })
  };

  checkTokenValidity() {
    if(!this.tokenService.isValid(this.accessToken)) {
      this.authService.logoutUser();
    }
  }
}
