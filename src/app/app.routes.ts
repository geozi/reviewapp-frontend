import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { MainNavbarComponent } from './components/navigation/main-navbar/main-navbar.component';
import { InstructionCardComponent } from './components/cards/instruction-card/instruction-card.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { AddReviewComponent } from './components/crud/add-review/add-review.component';
import { CreateReviewComponent } from './components/crud/create-review/create-review.component';
import { DeleteReviewComponent } from './components/crud/delete-review/delete-review.component';
import { UpdateReviewComponent } from './components/crud/update-review/update-review.component';
import { GetReviewsComponent } from './components/crud/get-reviews/get-reviews.component';

export const routes: Routes = [
    {path:'register-form', component:RegisterFormComponent},
    {path:'navbar', component:MainNavbarComponent},
    {path:'instruction-card', component:InstructionCardComponent},
    {path:'login-form', component:LoginFormComponent},
    {path: '', component:LoginFormComponent},
    {path: 'crud/add', component:AddReviewComponent},
    {path: 'crud/create', component:CreateReviewComponent},
    {path: 'crud/delete', component:DeleteReviewComponent},
    {path: 'crud/update', component:UpdateReviewComponent},
    {path: 'crud/get', component:GetReviewsComponent}

];
