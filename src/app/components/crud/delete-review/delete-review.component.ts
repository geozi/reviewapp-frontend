import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../../navigation/crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-delete-review',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './delete-review.component.html',
  styleUrl: './delete-review.component.css'
})
export class DeleteReviewComponent {

}
