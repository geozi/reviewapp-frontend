import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient = inject(HttpClient);

  registerUser(user: User): Observable<any> {
    
    const url = `${API_URL}/register`;
    return this.http.post(url, user, httpOptions);
  }
}
