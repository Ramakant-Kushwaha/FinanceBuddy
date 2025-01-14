import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './components/Login-signup/Loign-signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './auth-components/auth.module';
import { AuthInterceptor } from 'src/auth-inercepter';
import { AuthService } from './auth-components/services/auth.service';
import { FeatureModuleModule } from './components/features/feature-module.module';
import { NotificationPopupComponent } from './components/shared/notification-popup/notification-popup.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    NotificationPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    AuthModule,
    FeatureModuleModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
