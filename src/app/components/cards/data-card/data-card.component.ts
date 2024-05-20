import { Component, Input, inject } from '@angular/core';
import { PersistedReviewItem } from 'src/app/shared/interfaces/persisted-review-item';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.css'
})
export class DataCardComponent {
  @Input() data: PersistedReviewItem[];

  reviewService = inject(ReviewService)

  deleteReviewItem(id: string){
    this.reviewService.deleteReviewById(id).subscribe({
      next: (response) => {
        console.log('Review: ' + response + ' deleted')
      },
      error: (response) => {
        console.log(response.error.message)
      }
    })
  }

}
