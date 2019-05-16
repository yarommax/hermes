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
    { url: '/transport', name: 'Find a transport' },
    { url: '/transport', name: 'List of transport' },
    { url: '/transport/new', name: 'Add a transport' },
    { url: '/cargo', name: 'List of load' },
    { url: '/cargo/new', name: 'Add a cargo' },
  ];
  userName = localStorage.getItem('user_name');

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
