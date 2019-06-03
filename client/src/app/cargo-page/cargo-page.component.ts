import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../shared/interfaces';
import { CargoService } from '../shared/services/cargo.service';

@Component({
  selector: 'app-cargo-page',
  templateUrl: './cargo-page.component.html',
  styleUrls: ['./cargo-page.component.css'],
})
export class CargoPageComponent implements OnInit {
  cargos$: Observable<Cargo[]>;
  filterBlock = false;
  showOffer = false;

  constructor(private cargoService: CargoService) { }

  ngOnInit() {
    this.fetch();
  }

  applyFilter(filter) {
    this.cargos$ = this.cargoService.fetchFilteredCargo(filter);
  }

  fetch() {
    this.cargos$ = this.cargoService.fetchCargo();
  }

  openFilter() {
    this.filterBlock ? this.filterBlock = false : this.filterBlock = true;
  }
}
