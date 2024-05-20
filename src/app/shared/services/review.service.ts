import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Review } from '../interfaces/review';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:8080/api'
const accessToken = localStorage.getItem("accessToken")

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + accessToken
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  http: HttpClient = inject(HttpClient)
  
  createReview(review: Review) : Observable<any> {
    
    const url = `${API_URL}/reviews`;

    if(accessToken) {
      const decodedTokenSubject = jwtDecode(accessToken).sub as string;
      review.username = decodedTokenSubject
      return this.http.post(url, review, httpOptions)
    }

    return this.http.post(url, review, httpOptions)

  }

  getReviewsByUsername(username: string) {
    const url = `${API_URL}/reviews-by-username?username=${username}`
    return this.http.get(url, httpOptions)
  }

  deleteReviewById(id: string) {
    const url = `${API_URL}/reviews/${id}`
    return this.http.delete(url)
  }
}
