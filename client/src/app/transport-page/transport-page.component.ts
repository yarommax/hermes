import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-transport-page',
  templateUrl: './transport-page.component.html',
  styleUrls: ['./transport-page.component.css'],
})
export class TransportPageComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
}
