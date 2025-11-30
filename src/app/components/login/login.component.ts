import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.form.invalid) return;
    console.log('Login data:', this.form.value);

    const credentials = {
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? '',
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        console.log('Login success:', res);
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
  }
}
