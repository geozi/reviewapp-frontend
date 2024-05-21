import { Component, OnInit, inject } from '@angular/core';
import { CrudNavbarComponent } from '../../navigation/crud-navbar/crud-navbar.component';
import { ReviewService } from 'src/app/shared/services/review.service';
import { jwtDecode } from 'jwt-decode';
import { PersistedReviewItem } from 'src/app/shared/interfaces/persisted-review-item';
import { DataCardComponent } from '../../cards/data-card/data-card.component';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-get-reviews',
  standalone: true,
  imports: [CrudNavbarComponent, DataCardComponent],
  templateUrl: './get-reviews.component.html',
  styleUrl: './get-reviews.component.css'
})
export class GetReviewsComponent implements OnInit {

  reviewService = inject(ReviewService)
  tokenService = inject(TokenService)
  data: any[] = [];

  ngOnInit(): void {

    const accessToken = this.tokenService.getToken();
    const username = jwtDecode(accessToken).sub as string;
    this.refreshReviewItems(username);
  }

  refreshReviewItems(username:string) {
    this.reviewService.getReviewsByUsername(username).subscribe({
      next: (response) => {
        const reviews = response as Array<PersistedReviewItem>;

       this.data = reviews.map((review) => ({
        id: review.id,
        subject: review.subject,
        description: review.description,
      }));

      console.log(this.data)
      },
      error: (response) => {
        console.log('No review items were found in the database.')
      }
    })
  }

}
