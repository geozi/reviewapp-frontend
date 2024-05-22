import { Injectable} from '@angular/core';
import { Review } from '../interfaces/review';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { BaseReviewService } from './base-review.service';

const API_URL = 'http://localhost:8080/api'

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseReviewService{

  
  createReview(review: Review) : Observable<any> {
    
    const url = `${API_URL}/reviews`;

    this.checkTokenValidity();

    const decodedTokenSubject = jwtDecode(this.accessToken).sub as string;review.username = decodedTokenSubject
    return this.http.post(url, review, this.httpOptions)

  }

  getReviewsByUsername(username: string) {

    this.checkTokenValidity();

    const url = `${API_URL}/reviews-by-username?username=${username}`
    return this.http.get(url, this.httpOptions)
  }

  deleteReviewById(id: string) {

    this.checkTokenValidity();

    const url = `${API_URL}/reviews/${id}`
    return this.http.delete(url, this.httpOptions)
  }
}
