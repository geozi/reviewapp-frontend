import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken() {
    return localStorage.getItem("accessToken")
  }

  isValid(accessToken : string) {

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTimeStamp =jwtDecode(accessToken).exp as number
    
    if(currentTimestamp < expirationTimeStamp) {
      return true
    }
    return false;
  }
}
