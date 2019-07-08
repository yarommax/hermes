import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Cargo, OfferCargo, Transport} from '../../shared/interfaces';
import { TransportService } from '../../shared/services/transport.service';
import { ActivatedRoute } from '@angular/router';
import {CargoService} from '../../shared/services/cargo.service';
import {OfferService} from '../../shared/services/offer.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  car$: Observable<Transport>;
  cargos$: Observable<Cargo[]>;
  selectedCargo: Cargo = null;

  selected = false;

  constructor(private transportService: TransportService,
              private route: ActivatedRoute,
              private cargoService: CargoService,
              private offerService: OfferService) { }

  ngOnInit() {
    this.getCar();
    this.getMyCargo();
    console.log(this.selectedCargo);
  }

  getCar() {
    const id = this.route.snapshot.params.id;
    this.car$ = this.transportService.getCarById(id);
  }

  getMyCargo() {
    this.cargos$ = this.cargoService.fetchUserCargo();
  }

  onSelectCargo(c: Cargo) {
    this.selected = true;
    this.selectedCargo = c;
  }

  onOfferCargo() {
    if (this.route.snapshot.params.id && this.selectedCargo) {
      const offer: OfferCargo = {
        carId: this.route.snapshot.params.id,
        cargoId: this.selectedCargo._id,
      };
      this.offerService.offerCargo(offer);
    }

  }
}
