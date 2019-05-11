import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { TransportPageComponent } from './transport-page/transport-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AuthGuard } from './shared/etc/auth.guard';
import { CargoPageComponent } from './cargo-page/cargo-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/overview' , pathMatch: 'full' },
      { path: 'overview', component: OverviewPageComponent },
      { path: 'transport', canActivate: [AuthGuard], component: TransportPageComponent },
      { path: 'cargo', canActivate: [AuthGuard], component: CargoPageComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegistrationPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
