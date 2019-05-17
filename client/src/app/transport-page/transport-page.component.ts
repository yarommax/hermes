import { Component, OnInit } from '@angular/core';
import { TransportService } from '../shared/services/transport.service';
import { Transport } from '../shared/interfaces';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MaterialService } from '../shared/etc/material.service';
import { TransportFilterService } from './transport-filter.service';

@Component({
  selector: 'app-transport-page',
  templateUrl: './transport-page.component.html',
  styleUrls: ['./transport-page.component.css'],
})
export class TransportPageComponent implements OnInit {
  filterBlock = false;
  transports: Transport[];
  filteredTransport: Transport[] = [];
  form: FormGroup;


  constructor(private transportService: TransportService,
              private router: Router,
              private transportFilterService: TransportFilterService) { }


  ngOnInit() {
    this.fetchTransport();

    this.form = new FormGroup({
      startPoint : new FormControl(null),
      endPoint : new FormControl(null),
    });
  }

  fetchTransport() {
    let obs$;
    obs$ = this.transportService.fetchTransport();
    obs$
      .subscribe((response) => {
        this.transports = response.reverse();
      });
  }

  openFilter() {
    this.filterBlock ? this.filterBlock = false : this.filterBlock = true;
  }

  applyFilter() {
    this.form.disable();
    this.filteredTransport = this.transportFilterService.filter(this.form, this.transports);
    if (this.filteredTransport.length !== 0) {
      this.transports = this.filteredTransport;
      this.form.enable();
    } else {
      this.transports = [];
      MaterialService.toast('Nothing found');
      this.form.reset();
      this.form.enable();
    }
  }

  clearFilter(): void {
    this.form.reset();
    this.fetchTransport();
  }
}
