import { Component, OnInit } from '@angular/core';
import { TransportService } from '../shared/services/transport.service';
import { Transport } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transport-page',
  templateUrl: './transport-page.component.html',
  styleUrls: ['./transport-page.component.css'],
})
export class TransportPageComponent implements OnInit {
  transports$: Observable<Transport[]>;

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.fetch();
  }

  applyFilter(filter) {
    this.transports$ = this.transportService.fetchFilteredTransport(filter);
  }

  fetch() {
    this.transports$ = this.transportService.fetchTransport();
  }
}
