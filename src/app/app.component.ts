import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstructionCardComponent } from './components/cards/instruction-card/instruction-card.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterFormComponent, NavbarComponent, InstructionCardComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
