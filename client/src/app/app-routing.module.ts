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
import { TransportFormComponent } from './transport-page/transport-form/transport-form.component';
import { AccountLayoutComponent } from './shared/layouts/account-layout/account-layout.component';
import { AcTransportPageComponent } from './account/ac-transport-page/ac-transport-page.component';
import { AcMainPageComponent } from './account/ac-main-page/ac-main-page.component';
import { CargoFormComponent } from './cargo-page/cargo-form/cargo-form.component';
import { AcCargoPageComponent } from './account/ac-cargo-page/ac-cargo-page.component';
import { TransportComponent } from './transport-page/transport/transport.component';
import {CargoComponent} from './cargo-page/cargo/cargo.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/overview' , pathMatch: 'full' },
      { path: 'overview', component: OverviewPageComponent },
      { path: 'transport', canActivate: [AuthGuard], component: TransportPageComponent },
      { path: 'transport/new', canActivate: [AuthGuard], component: TransportFormComponent },
      { path: 'transport/:id', canActivate: [AuthGuard], component: TransportComponent },
      { path: 'cargo', canActivate: [AuthGuard], component: CargoPageComponent },
      { path: 'cargo/new', canActivate: [AuthGuard], component: CargoFormComponent },
      { path: 'cargo/:id', canActivate: [AuthGuard], component: CargoComponent },
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
  {
    path: 'account',
    component: AccountLayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: AcMainPageComponent },
      { path: 'transport', component: AcTransportPageComponent },
      { path: 'load', component: AcCargoPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
