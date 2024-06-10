import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

/**
 * Service providing JWT-related functionalities.
 * @author geozi
 * @version 1
 */
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  /**
   * Retrieves token from local storage.
   * @returns The token of type string.
   */
  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  /**
   * Checks if a token is valid.
   * @param accessToken The inserted token of type string.
   * @returns True if token is valid, false otherwise.
   */
  isValid(accessToken: string): boolean {
    if (!accessToken) {
      return false;
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTimeStamp = jwtDecode(accessToken).exp as number;

    return currentTimestamp < expirationTimeStamp;
  }
}
