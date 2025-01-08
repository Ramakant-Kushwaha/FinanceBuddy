import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    const body = {
      email,
      password: btoa(password),
    };

    this.http.post('user/login', { ...body }).subscribe();
  }
}
