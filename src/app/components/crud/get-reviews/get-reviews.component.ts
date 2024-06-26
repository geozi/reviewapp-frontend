import { Component, OnInit, inject } from '@angular/core';
import { CrudNavbarComponent } from '../../navigation/crud-navbar/crud-navbar.component';
import { ReviewService } from 'src/app/shared/services/review.service';
import { jwtDecode } from 'jwt-decode';
import { DataCardComponent } from '../../cards/data-card/data-card.component';
import { TokenService } from 'src/app/shared/services/token.service';
import { ReviewItem } from 'src/app/shared/interfaces/review-item';

/**
 * Component responsible for implementing the GET method for reviews.
 * @author geozi
 * @version 1
 */
@Component({
  selector: 'app-get-reviews',
  standalone: true,
  imports: [CrudNavbarComponent, DataCardComponent],
  templateUrl: './get-reviews.component.html',
  styleUrl: './get-reviews.component.css',
})
export class GetReviewsComponent implements OnInit {
  reviewService = inject(ReviewService);
  tokenService = inject(TokenService);
  data: any[] = [];

  ngOnInit(): void {
    this.reviewService.checkTokenValidity();
    const accessToken = this.tokenService.getToken();
    const username = jwtDecode(accessToken).sub as string;
    this.refreshReviewItems(username);
  }

  /**
   * Repeats the GET method for reviews and sorts
   * the results.
   * @param username The username of the user.
   */
  refreshReviewItems(username: string) {
    this.reviewService.getReviewsByUsername(username).subscribe({
      next: (response) => {
        const reviews = response as Array<ReviewItem>;
        const sortedReviews = reviews.sort((a, b) =>
          a.created > b.created ? -1 : 1
        );

        this.data = sortedReviews.map((review) => ({
          id: review.id,
          subject: review.subject,
          description: review.description,
          created: new Date(review.created),
        }));
      },
      error: (response) => {
        console.log('No review items were found in the database.');
      },
    });
  }
}
