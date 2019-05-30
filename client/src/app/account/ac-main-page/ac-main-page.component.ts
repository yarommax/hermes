import {Component, OnInit} from '@angular/core';
import { TransportService } from '../../shared/services/transport.service';
import {CargoService} from '../../shared/services/cargo.service';

@Component({
  selector: 'app-ac-main-page',
  templateUrl: './ac-main-page.component.html',
  styleUrls: ['./ac-main-page.component.css'],
})
export class AcMainPageComponent implements OnInit {
  cars$;
  cargos$;

  constructor(private transportService: TransportService,
              private cargoService: CargoService) { }

  ngOnInit() {
    this.getMyTransport();
    this.getMyCargos();
  }

  getMyTransport() {
    this.cars$ = this.transportService.fetchUserTransport();
  }
  getMyCargos() {
    this.cargos$ = this.cargoService.fetchUserCargo();
  }

}
