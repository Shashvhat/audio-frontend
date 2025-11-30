import { Routes } from '@angular/router';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];
