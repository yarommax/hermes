import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MaterialDropdown, MaterialInstance, MaterialService, MaterialSidenav } from '../../etc/material.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.css'],
})
export class AccountLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  userName = localStorage.getItem('user_name');
  userId = localStorage.getItem('user_id');
  currentUser;

  links = [
    { url: `/account/main`, name: 'History' },
    { url: `/account/transport`, name: 'My transport' },
    { url: `/account/cargo`, name: 'My loads' },
  ];

  @ViewChild('dropdown') dropdownRef: ElementRef;
  dropdown: MaterialDropdown;
  @ViewChild('sidenav') sidenavRef: ElementRef;
  sidenav: MaterialSidenav;
  @ViewChild('modal') modalRef: ElementRef;
  modal: MaterialInstance;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.modal.destroy();
    this.dropdown.destroy();
    this.sidenav.destroy();
  }

  ngAfterViewInit() {
    this.dropdown = MaterialService.initDropdown(this.dropdownRef, {
      coverTrigger: false,
      constrainWidth: false,

    });

    this.sidenav = MaterialService.initSidenav(this.sidenavRef);
    this.modal = MaterialService.initModal(this.modalRef);
  }

  // modal
  openUserInfo() {
    let user;
    user = this.authService.getUserInfo();
    user.subscribe( res => this.currentUser = res);
    this.modal.open();
  }

  closeModal() {
    this.modal.close();
  }

  logout() {
    this.authService.logout();
  }

}
