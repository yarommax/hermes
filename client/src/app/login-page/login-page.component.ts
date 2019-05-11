import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  res: {} = {};

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.form.disable();
    let obs$;

    const body = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    obs$ = this.authService.login(body);
    obs$.subscribe(
        (response) => {
          this.form.reset();
          this.res = response;
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.form.enable();
          this.router.navigate(['/overview']);
        },
      );
  }
}
