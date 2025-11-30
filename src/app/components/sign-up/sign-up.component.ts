import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private authService: AuthService) {}

  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.form.invalid) return;
    console.log('Sign-up data:', this.form.value);

    const credentials = {
      name: this.form.value.name ?? '',
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? '',
    };

    this.authService.signup(credentials).subscribe({
      next: (res) => {
        console.log('Signup success:', res);
      },
      error: (err) => {
        console.error('Signup failed:', err);
      },
    });
  }
}
