import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private auth: AuthService) {}
  public onLoginButtonClick(loginFromValues: {
    email: string;
    password: string;
  }) {
    this.auth.login(loginFromValues.email, loginFromValues.password);
  }
}
