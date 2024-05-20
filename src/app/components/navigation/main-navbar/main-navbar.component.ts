import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {
  authService = inject(AuthService)
  user = this.authService.user;

  logout() {
    this.authService.logoutUser();
  }
}
