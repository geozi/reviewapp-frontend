import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Review } from 'src/app/shared/interfaces/review';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-create-review',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export class CreateReviewComponent {

  reviewService = inject(ReviewService)

  form = new FormGroup({
    subject: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required)
  })

  onSubmit(value: any){
    const review = value as Review
    console.log(review)
    this.reviewService.createReview(review).subscribe({
      next: (response) => {
        this.form.reset();
        alert('Review created!')
      },
      error: (error) => {
        console.error('Error:', error)
      }
    })
  }


}
