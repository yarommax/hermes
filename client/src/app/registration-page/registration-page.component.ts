import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.form.disable();
    let obs$;

    const body = {
      email: this.form.value.email,
      username: this.form.value.username,
      password: this.form.value.password,
    };

    obs$ = this.authService.register(body);
    obs$.subscribe(
        (response) => {
          this.form.reset();
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => this.form.enable(),
      );
  }

}
