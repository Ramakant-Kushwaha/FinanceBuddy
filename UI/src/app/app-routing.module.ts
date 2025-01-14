import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './components/Login-signup/Loign-signup.component';
import { HomePageComponent } from './components/features/home-page/home-page.component';

const routes: Routes = [
  { component: LoginSignupComponent, path: '' },
  { component: HomePageComponent, path: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
