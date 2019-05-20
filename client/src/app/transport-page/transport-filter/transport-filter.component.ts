import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaterialService } from '../../shared/etc/material.service';

@Component({
  selector: 'app-transport-filter',
  templateUrl: './transport-filter.component.html',
  styleUrls: ['./transport-filter.component.css'],
})
export class TransportFilterComponent implements OnInit {
  filterBlock = false;

  form: FormGroup;
  @ViewChild('select') selectRef: ElementRef;
  // tslint:disable:no-output-on-prefix
  @Output() onFilter = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
    MaterialService.initSelectField(this.selectRef);

    this.form = new FormGroup({
      loadingDate: new FormControl(),
      dischargeDate: new FormControl(),
      loadingPoint: new FormControl(),
      dischargePoint: new FormControl(),
      typeTransport: new FormControl(),
      amountTransport: new FormControl(),
      loadCapacity: new FormControl(),
      companyName: new FormControl(),
    });
  }

  applyFilter() {
    this.onFilter.emit(this.form.value);
  }

  openFilter() {
    this.filterBlock ? this.filterBlock = false : this.filterBlock = true;
  }

  clearFilter(): void {
    this.form.reset();
    this.onCancel.emit();
  }

}
