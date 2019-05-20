import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../shared/services/transport.service';
import { Transport } from '../../shared/interfaces';

@Component({
  selector: 'app-ac-transport-page',
  templateUrl: './ac-transport-page.component.html',
  styleUrls: ['./ac-transport-page.component.css'],
})
export class AcTransportPageComponent implements OnInit {
  myTransport: Transport[];

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.getMyTransport();
  }

  getMyTransport() {
    let obs$;
    obs$ = this.transportService.fetchUserTransport();
    obs$.subscribe((res) => {
      this.myTransport = res.reverse();
    });
  }
}
