import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginResponse } from '../../models/loginResponse';
import { PrimeNgModule } from '../../prime-ng.module';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, PrimeNgModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      email: [],
      password: [],
    });
  }

  submit() {
    this.authService
      .login(this.form.getRawValue())
      .subscribe((data) => this.handleLogin(data));
  }

  private handleLogin = (loginResponse: LoginResponse) => {
    localStorage.setItem('token', loginResponse.jwt);
    this.router.navigate(['dashboard']);
  };
}
