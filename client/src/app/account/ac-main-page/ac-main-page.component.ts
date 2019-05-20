import { Component, OnInit } from '@angular/core';
import { Transport } from '../../shared/interfaces';
import { TransportService } from '../../shared/services/transport.service';

@Component({
  selector: 'app-ac-main-page',
  templateUrl: './ac-main-page.component.html',
  styleUrls: ['./ac-main-page.component.css'],
})
export class AcMainPageComponent implements OnInit {
  myTransport: Transport[];
  amount;

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.getMyTransport();
  }

  getMyTransport() {
    let obs$;
    obs$ = this.transportService.fetchUserTransport();
    obs$.subscribe((res) => {
      this.myTransport = res;
      this.amount = res.length;
    });
  }

}
