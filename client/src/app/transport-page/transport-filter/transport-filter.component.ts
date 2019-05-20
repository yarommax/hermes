import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaterialDatePicker, MaterialService } from '../../shared/etc/material.service';

@Component({
  selector: 'app-transport-filter',
  templateUrl: './transport-filter.component.html',
  styleUrls: ['./transport-filter.component.css'],
})
export class TransportFilterComponent implements OnInit, AfterViewInit, OnDestroy {
  filterBlock = false;

  form: FormGroup;
  @ViewChild('select') selectRef: ElementRef;
  // tslint:disable:no-output-on-prefix
  @Output() onFilter = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild('loadingDate') loadingRef: ElementRef;
  @ViewChild('dischargeDate') dischargeRef: ElementRef;
  loadingDate: MaterialDatePicker;
  dischargeDate: MaterialDatePicker;
  isValid = true;

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

  ngAfterViewInit() {
    this.loadingDate = MaterialService.initDatepicker(this.loadingRef, this.validateDateInput.bind(this));
    this.dischargeDate = MaterialService.initDatepicker(this.dischargeRef, this.validateDateInput.bind(this));
  }

  ngOnDestroy() {
    this.loadingDate.destroy();
    this.dischargeDate.destroy();
  }

  validateDateInput() {
    if (!this.loadingDate.date || !this.dischargeDate.date) {
      this.isValid = true;
      return;
    }

    this.isValid = this.loadingDate.date < this.dischargeDate.date;
  }

  applyFilter() {
    const body = {
      loadingDate: this.loadingDate.date,
      dischargeDate: this.dischargeDate.date,
      loadingPoint: this.form.value.loadingPoint,
      dischargePoint: this.form.value.dischargePoint,
      typeTransport: this.form.value.typeTransport,
      amountTransport: this.form.value.amountTransport,
      loadCapacity: this.form.value.loadCapacity,
      companyName: this.form.value.companyName,
    };
    this.onFilter.emit(body);
  }

  openFilter() {
    this.filterBlock ? this.filterBlock = false : this.filterBlock = true;
  }

  clearFilter(): void {
    this.form.reset();
    this.onCancel.emit();
  }

}
