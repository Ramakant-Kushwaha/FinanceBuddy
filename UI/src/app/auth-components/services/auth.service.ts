import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { notificationDialog } from 'src/app/components/shared/services/notification-dialog.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: notificationDialog
  ) {}

  public login(email: string, password: string) {
    const body = {
      email,
      password: btoa(password),
    };

    this.http
      .post('user/login', { ...body })
      .pipe(
        tap((res: { authToken: string }) => {
          if (res.authToken) {
            this.dialog.successNotification('Logged-in successfully');
            this.router.navigateByUrl('/home');
          }
        }),
        catchError((err) => {
          this.dialog.errorNotification('Something went wrong');
          return of(null);
        })
      )
      .subscribe();
  }
}
