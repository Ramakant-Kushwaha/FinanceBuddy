import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormType } from '../enums/formType';
import { LinkTextType } from '../types/LinkTextType';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() currentFormType: FormType = FormType.login;
  public readonly FormTypes: typeof FormType = FormType;

  @Output() fromValues: EventEmitter<{ email: string; password: string }> =
    new EventEmitter();

  public linkText: LinkTextType = {
    linkName: '',
    linkString: '',
  };

  constructor() {}
  ngOnInit(): void {
    this.setupForm();
  }

  public onChangeFormType() {
    this.currentFormType =
      this.currentFormType === FormType.login
        ? FormType.signup
        : FormType.login;
    this.setupForm();
  }

  public setupForm() {
    if (this.currentFormType === FormType.login) {
      this.linkText.linkName = 'Sign up';
      this.linkText.linkString = "  Don't have an account?";
    } else if (this.currentFormType === FormType.signup) {
      this.linkText.linkName = 'Login';
      this.linkText.linkString = 'have an account?';
    }
  }

  public onFormSubmit(form: NgForm) {
    this.fromValues.emit({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
