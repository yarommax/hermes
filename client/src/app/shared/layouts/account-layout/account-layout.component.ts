import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialDropdown, MaterialService, MaterialSidenav } from '../../etc/material.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.css'],
})
export class AccountLayoutComponent implements OnInit, AfterViewInit {

  links = [
    { url: '/history', name: 'History' },
    { url: '/transport', name: 'My transport' },
    { url: '/cargo', name: 'My loads' },
    { url: '/logout', name: 'Logout' },
  ];

  @ViewChild('dropdown') dropdownRef: ElementRef;
  dropdown: MaterialDropdown;
  @ViewChild('sidenav') sidenavRef: ElementRef;
  sidenav: MaterialSidenav;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initDropdown(this.dropdownRef, {
      coverTrigger: false,
      constrainWidth: false,

    });
    MaterialService.initSidenav(this.sidenavRef);
  }

  logout() {
    this.authService.logout();
  }

}
