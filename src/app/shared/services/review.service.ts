import { Injectable } from '@angular/core';
import { Review } from '../interfaces/review';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { BaseReviewService } from './base-review.service';

const API_URL = 'http://localhost:8080/api';

/**
 * Service providing CRUD (Create, Get, Delete) functionalities
 * for review objects.
 * @author geozi
 * @version 1
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewService extends BaseReviewService {
  /**
   * Adds a review.
   * @param review A review object to be persisted.
   * @returns An observable representing the HTTP response from the backend.
   * @extends {BaseReviewService}
   */
  createReview(review: Review): Observable<any> {
    const url = `${API_URL}/reviews`;

    this.checkTokenValidity();

    const decodedTokenSubject = jwtDecode(this.accessToken).sub as string;
    review.username = decodedTokenSubject;
    return this.http.post(url, review, this.httpOptions);
  }

  /**
   * Retrieves persisted reviews by username.
   * @param username The username of a user.
   * @returns An observable representing the HTTP response from the backend.
   */
  getReviewsByUsername(username: string): Observable<any> {
    const url = `${API_URL}/reviews-by-username?username=${username}`;
    return this.http.get(url, this.httpOptions);
  }

  /**
   * Deletes a persisted review.
   * @param id The id of the review.
   * @returns An observable representing the HTTP response from the backend.
   */
  deleteReviewById(id: string): Observable<any> {
    this.checkTokenValidity();

    const url = `${API_URL}/reviews/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
