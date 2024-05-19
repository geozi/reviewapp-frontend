import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';
import { Role } from 'src/app/shared/interfaces/role';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  userService = inject(UserService)
  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet',
  };

  form = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    },
    this.passwordConfirmValidator
  )

  passwordConfirmValidator(form : FormGroup) {
    if(form.get('password').value !== form.get('confirmPassword').value) {
      form.get('confirmPassword').setErrors({passwordMismatch : true});
      return {passwordMismatch : true}
    } else {
      return {}
    }
  }

  onSubmit(value: any) {

    const user = value as User;
    user['role'] = Role.User;
    delete user['confirmPassword']

    this.userService.registerUser(user).subscribe({
      next: (response) => {

        console.log(response)
        this.registrationStatus = {success:true, message:response.message}
      },
      error: (response) => {
        const message = response.error.message;
        console.log(message);
        this.registrationStatus = {success:false, message: message}
      },
    });

  }

  registerAnotherUser() {
    this.form.reset();
    this.registrationStatus = {
      success: false,
      message: 'Not attempted yet',
    };
  }

}
