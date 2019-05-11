import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {

  links = [
    { url: '/transport', name: 'List of transport' },
    { url: '/cargo', name: 'List of load' },
  ];
  currentUser: User;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
    this.getUserFromReq();
  }

  getUserFromReq() {
    if (this.authService.isAuthenticated()) {
      let user$;
      user$ = this.authService.getUserFromRequest();
      user$.subscribe( user => {
        this.currentUser = user;
      });
    }
  }
}
