import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstructionCardComponent } from './components/cards/instruction-card/instruction-card.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

export const routes: Routes = [
    {path:'register-form', component:RegisterFormComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'instruction-card', component:InstructionCardComponent},
    {path:'login-form', component:LoginFormComponent},
    {path: '', component:LoginFormComponent}
];
