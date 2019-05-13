import { Component, OnInit } from '@angular/core';
import { TransportService } from '../shared/services/transport.service';
import { Transport } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-page',
  templateUrl: './transport-page.component.html',
  styleUrls: ['./transport-page.component.css'],
})
export class TransportPageComponent implements OnInit {
  constructor(private transportService: TransportService,
              private router: Router) { }

  transports: Transport[];

  ngOnInit() {
    this.fetchTransport();
  }

  fetchTransport() {
    let obs$;
    obs$ = this.transportService.fetchTransport();
    obs$
      .subscribe((response) => {
        this.transports = response;
      });
  }

  onFieldClick(car) {
    console.log(car);
    this.router.navigate(['transport/new']);
  }
}
