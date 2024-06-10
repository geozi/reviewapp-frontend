import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Credentials } from 'src/app/shared/interfaces/credentials';
import { AuthService } from 'src/app/shared/services/auth.service';

/**
 * Login form component.
 * @author geozi
 * @version 1
 */
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  authService = inject(AuthService);
  router = inject(Router);

  invalidLogin = false;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  /**
   * Called when the Submit button is clicked.
   */
  onSubmit() {
    const credentials = this.form.value as Credentials;

    this.authService.loginUser(credentials).subscribe({
      next: (response) => {
        const accessToken = response.token;
        localStorage.setItem('accessToken', accessToken);
        const decodedTokenSubject = jwtDecode(accessToken)
          .sub as unknown as string;

        this.authService.user.set({
          username: decodedTokenSubject,
        });

        this.router.navigate(['/crud/get']);
        this.form.reset();
      },
      error: (response) => {
        console.error('Login Error', response);
        this.invalidLogin = true;
      },
    });
  }

  /**
   * Called when the Register button is clicked.
   */
  onRegister() {
    this.router.navigate(['register-form']);
  }
}
