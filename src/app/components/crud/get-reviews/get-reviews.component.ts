import { Component } from '@angular/core';
import { CrudNavbarComponent } from '../../navigation/crud-navbar/crud-navbar.component';

@Component({
  selector: 'app-get-reviews',
  standalone: true,
  imports: [CrudNavbarComponent],
  templateUrl: './get-reviews.component.html',
  styleUrl: './get-reviews.component.css'
})
export class GetReviewsComponent {

}
