import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { MainNavbarComponent } from './components/navigation/main-navbar/main-navbar.component';
import { InstructionCardComponent } from './components/cards/instruction-card/instruction-card.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { CreateReviewComponent } from './components/crud/create-review/create-review.component';
import { DeleteReviewComponent } from './components/crud/delete-review/delete-review.component';
import { UpdateReviewComponent } from './components/crud/update-review/update-review.component';
import { GetReviewsComponent } from './components/crud/get-reviews/get-reviews.component';
import { CrudNavbarComponent } from './components/navigation/crud-navbar/crud-navbar.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {path:'register-form', component:RegisterFormComponent},
    {path:'navbar', component:MainNavbarComponent},
    {path:'instruction-card', component:InstructionCardComponent},
    {path:'login-form', component:LoginFormComponent},
    {path: '', component:LoginFormComponent},
    {path: 'crud/create', 
    component:CreateReviewComponent,
    canActivate:[authGuard]},
    {path: 'crud/delete', 
    component:DeleteReviewComponent,
    canActivate:[authGuard]},
    {path: 'crud/update', 
    component:UpdateReviewComponent,
    canActivate:[authGuard]},
    {path: 'crud/get', 
    component:GetReviewsComponent,
    canActivate:[authGuard]},
    {path: 'crud-navbar', component:CrudNavbarComponent}

];
