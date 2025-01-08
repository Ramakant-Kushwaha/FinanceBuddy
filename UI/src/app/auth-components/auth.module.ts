import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, LoginFormComponent, SignupFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginFormComponent, SignupFormComponent],
  providers: [],
})
export class AuthModule {}
