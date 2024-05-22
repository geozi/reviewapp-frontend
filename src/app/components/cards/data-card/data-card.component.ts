import { Component, Input, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { ReviewService } from 'src/app/shared/services/review.service';
import { ReviewItem } from 'src/app/shared/interfaces/review-item';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css'
})
export class DataCardComponent {
  @Input() data: ReviewItem[];

  reviewService = inject(ReviewService)

  deleteReviewItem(id: string){
    this.reviewService.deleteReviewById(id).subscribe({
      next: (response) => {
        const deletedReview = response as ReviewItem
        console.log('Review: {subject: ' + deletedReview.subject + ', description: ' + deletedReview.description + '} deleted')
      },
      error: (response) => {
        console.log(response.error.message)
      }
    })
  }

}
