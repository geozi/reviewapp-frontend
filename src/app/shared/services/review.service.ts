import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Review } from '../interfaces/review';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from './token.service';

const API_URL = 'http://localhost:8080/api'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  http: HttpClient = inject(HttpClient)
  tokenService = inject(TokenService)
  
  accessToken = this.tokenService.getToken();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    })
  };
  
  
  createReview(review: Review) : Observable<any> {
    
    const url = `${API_URL}/reviews`;
    

    if(this.accessToken) {
      const decodedTokenSubject = jwtDecode(this.accessToken).sub as string;
      review.username = decodedTokenSubject
      return this.http.post(url, review, this.httpOptions);
      
    }

    return this.http.post(url, review, this.httpOptions)

  }

  getReviewsByUsername(username: string) {
    const url = `${API_URL}/reviews-by-username?username=${username}`
    return this.http.get(url, this.httpOptions)
  }

  deleteReviewById(id: string) {
    const url = `${API_URL}/reviews/${id}`
    return this.http.delete(url, this.httpOptions)
  }
}
