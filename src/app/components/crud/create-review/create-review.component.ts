import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Review } from 'src/app/shared/interfaces/review';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReviewService } from 'src/app/shared/services/review.service';
import { CrudNavbarComponent } from '../../navigation/crud-navbar/crud-navbar.component';

/**
 * Component responsible for implementing the POST logic for reviews.
 * @author geozi
 * @version 1
 */
@Component({
  selector: 'app-create-review',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CrudNavbarComponent,
  ],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css',
})
export class CreateReviewComponent {
  reviewService = inject(ReviewService);
  reviewCreationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet',
  };

  form = new FormGroup({
    subject: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  /**
   * Retrieves new review information and forwards it to
   * the ReviewService API.
   * @param value The new review information.
   */
  onSubmit(value: any) {
    const review = value as Review;

    this.reviewService.createReview(review).subscribe({
      next: (response) => {
        this.reviewCreationStatus = { success: true, message: 'Review added' };
      },
      error: (response) => {
        const message = response.error.message;
        this.reviewCreationStatus = { success: false, message: message };
      },
    });
  }

  /**
   * Clears the review creation form and resets the component's viewing logic.
   */
  goBackToForm() {
    this.form.reset();
    this.reviewCreationStatus.message = 'Not attempted yet';
  }
}
