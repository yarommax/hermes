import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { AccountLayoutComponent } from './shared/layouts/account-layout/account-layout.component';
import { TransportPageComponent } from './transport-page/transport-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { TokenInterceptor } from './shared/etc/token.interceptor';
import { CargoPageComponent } from './cargo-page/cargo-page.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { TransportFormComponent } from './transport-page/transport-form/transport-form.component';
import { AcTransportPageComponent } from './account/ac-transport-page/ac-transport-page.component';
import { AcMainPageComponent } from './account/ac-main-page/ac-main-page.component';
import { TransportFilterComponent } from './transport-page/transport-filter/transport-filter.component';
import { CargoFilterComponent } from './cargo-page/cargo-filter/cargo-filter.component';
import { CargoFormComponent } from './cargo-page/cargo-form/cargo-form.component';
import { AcCargoPageComponent } from './account/ac-cargo-page/ac-cargo-page.component';
import { TransportComponent } from './transport-page/transport/transport.component';
import { CargoComponent } from './cargo-page/cargo/cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    MainLayoutComponent,
    AccountLayoutComponent,
    TransportPageComponent,
    AuthLayoutComponent,
    OverviewPageComponent,
    CargoPageComponent,
    LoaderComponent,
    TransportFormComponent,
    AcTransportPageComponent,
    AcMainPageComponent,
    TransportFilterComponent,
    CargoFormComponent,
    CargoFilterComponent,
    AcCargoPageComponent,
    TransportComponent,
    CargoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
