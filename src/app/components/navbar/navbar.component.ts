import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  openSignup() {
    this.dialog.open(SignUpComponent, {
      width: '400px',
    });
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }
}
