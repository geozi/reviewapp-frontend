import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken() {
    return localStorage.getItem("accessToken")
  }

  isValid(accessToken: string): boolean {
    
    if (!accessToken) {
      return false;
    }
  
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTimeStamp = jwtDecode(accessToken).exp as number;
  
    return currentTimestamp < expirationTimeStamp;
  }
  
}
