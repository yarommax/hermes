import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.css'],
})
export class AccountLayoutComponent implements OnInit {

  links = [
    { url: '/history', name: 'History' },
    { url: '/transport', name: 'My transport' },
    { url: '/cargo', name: 'My loads' },
    { url: '/logout', name: 'Logout' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
