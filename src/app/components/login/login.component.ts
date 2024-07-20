import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      email: [],
      password: [],
    });
  }

  submit() {
    this.authService
      .login(this.form.getRawValue())
      .subscribe((data) => console.log(data));
  }
}
