import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReviewService } from 'src/app/shared/services/review.service';
import { ReviewItem } from 'src/app/shared/interfaces/review-item';
import { Router } from '@angular/router';

/**
 * Component responsible for formatting persisted reviews
 * and implementing the DELETE logic.
 */
@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css',
})
export class DataCardComponent {
  @Input() data: ReviewItem[];
  router = inject(Router);

  reviewService = inject(ReviewService);

  /**
   * Deletes a persisted review.
   * @param id The id of the persisted review.
   */
  deleteReviewItem(id: string) {
    this.reviewService.deleteReviewById(id).subscribe({
      next: (response) => {
        // const deletedReview = response as ReviewItem;
        // console.log(
        //   'Review: {subject: ' +
        //     deletedReview.subject +
        //     ', description: ' +
        //     deletedReview.description +
        //     '} deleted'
        // );

        window.location.reload();
      },
      error: (response) => {
        console.log(response.error.message);
      },
    });
  }
}
