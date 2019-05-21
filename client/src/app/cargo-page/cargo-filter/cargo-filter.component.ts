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
  selector: 'app-cargo-filter',
  templateUrl: './cargo-filter.component.html',
  styleUrls: ['./cargo-filter.component.css']
})
export class CargoFilterComponent implements OnInit, AfterViewInit, OnDestroy {
  filterBlock = false;

  form: FormGroup;
  @ViewChild('select') selectRef: ElementRef;
  // tslint:disable:no-output-on-prefix
  @Output() onFilter = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild('startLoading') startLoadingRef: ElementRef;
  @ViewChild('endLoading') endLoadingRef: ElementRef;
  startLoading: MaterialDatePicker;
  endLoading: MaterialDatePicker;
  isValid = true;

  constructor() { }

  ngOnInit() {
    MaterialService.initSelectField(this.selectRef);

    this.form = new FormGroup({
      startLoadingDate: new FormControl(),
      endLoadingDate: new FormControl(),
      loadingPoint: new FormControl(),
      dischargePoint: new FormControl(),
      typeCargo: new FormControl(),
      cargoWeight: new FormControl(),
      typeTransport: new FormControl(),
      amountTransport: new FormControl(),
      companyName: new FormControl(),
    });
  }

  ngAfterViewInit() {
    this.startLoading = MaterialService.initDatepicker(this.startLoadingRef, this.validateDateInput.bind(this));
    this.endLoading = MaterialService.initDatepicker(this.endLoadingRef, this.validateDateInput.bind(this));
  }

  ngOnDestroy() {
    this.startLoading.destroy();
    this.endLoading.destroy();
  }

  validateDateInput() {
    if (!this.startLoading.date || !this.endLoading.date) {
      this.isValid = true;
      return;
    }

    this.isValid = this.startLoading.date < this.endLoading.date;
  }

  applyFilter() {
    const body = {
      startLoadingDate: this.startLoading.date,
      endLoadingDate: this.endLoading.date,
      loadingPoint: this.form.value.loadingPoint,
      dischargePoint: this.form.value.dischargePoint,
      typeCargo: this.form.value.typeCargo,
      cargoWeight: this.form.value.cargoWeight,
      typeTransport: this.form.value.typeTransport,
      amountTransport: this.form.value.amountTransport,
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
