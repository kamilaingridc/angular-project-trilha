import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

export const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
];
