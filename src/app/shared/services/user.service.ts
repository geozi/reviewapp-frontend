import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

/**
 * Service for handling  user registration requests.
 * @author geozi
 * @version 1
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  /**
   * Registers a new user by sending their data to the backend API.
   * @param user The user object containing registration details.
   * @returns An observable representing the HTTP response from the backend.
   */
  registerUser(user: User): Observable<any> {
    const url = `${API_URL}/register`;
    return this.http.post(url, user, httpOptions);
  }
}
