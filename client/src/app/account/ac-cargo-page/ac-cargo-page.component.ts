import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../../shared/interfaces';
import { CargoService } from '../../shared/services/cargo.service';

@Component({
  selector: 'app-ac-cargo-page',
  templateUrl: './ac-cargo-page.component.html',
  styleUrls: ['./ac-cargo-page.component.css']
})
export class AcCargoPageComponent implements OnInit {
  cargos$: Observable<Cargo[]>;
  constructor(private cargoService: CargoService) { }

  ngOnInit() {
    this.getMyCargo();
  }

  getMyCargo() {
    this.cargos$ = this.cargoService.fetchUserCargo();
  }
}
