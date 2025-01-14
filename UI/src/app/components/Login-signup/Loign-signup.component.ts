import { Component } from '@angular/core';

import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-Login-signup',
  templateUrl: './Login-signup.component.html',
  styleUrls: ['./Login-signup.component.css'],
})
export class LoginSignupComponent {
  public coinICon = faCoins;
}
