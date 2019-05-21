import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { MaterialService } from '../shared/etc/material.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      companyName: new FormControl(null),
      contactPersonName: new FormControl(null),
      contactSkype: new FormControl(null),
      contactTelephone: new FormControl(null),
    });
  }

  onSubmit() {
    this.form.disable();
    let obs$;

    const body = {
      email: this.form.value.email,
      username: this.form.value.username,
      password: this.form.value.password,
      companyName: this.form.value.companyName,
      contactPersonName: this.form.value.contactPersonName,
      contactSkype: this.form.value.contactSkype,
      contactTelephone: this.form.value.contactTelephone,
    };

    obs$ = this.authService.register(body);
    obs$.subscribe(
        (response) => {
          this.form.reset();
          MaterialService.toast(`Hello ${response.username}! Now you can login in the system`);
        },
        (error) => {
          MaterialService.toast(error.message);
        },
        () => {
          this.form.enable();
          this.router.navigate(['/login']);
        },
      );
  }

}
