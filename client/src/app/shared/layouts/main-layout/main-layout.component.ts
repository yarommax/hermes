import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
