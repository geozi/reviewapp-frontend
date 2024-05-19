import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authService = inject(AuthService)
  user = this.authService.user;

  logout() {
    this.authService.logoutUser();
  }
}
