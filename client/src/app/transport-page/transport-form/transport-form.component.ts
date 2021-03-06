import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialDatePicker, MaterialService } from '../../shared/etc/material.service';
import { Transport, User } from '../../shared/interfaces';
import { TransportService } from '../../shared/services/transport.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.css'],
})
export class TransportFormComponent implements OnInit, AfterViewInit, OnDestroy {

  form: FormGroup;
  showMap = false;
  transport: Transport;
  @ViewChild('select') selectRef: ElementRef;
  isValid = true;
  @ViewChild('loadingDate') loadingRef: ElementRef;
  @ViewChild('dischargeDate') dischargeRef: ElementRef;
  loadingDate: MaterialDatePicker;
  dischargeDate: MaterialDatePicker;

  constructor(private transportService: TransportService,
              private authService: AuthService) { }

  ngOnInit() {
    MaterialService.initSelectField(this.selectRef);
    this.form = new FormGroup({
      loadingDate: new FormControl(null),
      dischargeDate: new FormControl(null),
      loadingPoint: new FormControl(null),
      dischargePoint: new FormControl(null),
      typeTransport: new FormControl(null, Validators.required),
      amountTransport: new FormControl(null, [Validators.required, Validators.min(1)]),
      loadCapacity: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      companyName: new FormControl(null, Validators.required),
      contactPersonName: new FormControl(null, Validators.required),
      contactEmail: new FormControl(null, Validators.required),
      contactSkype: new FormControl(null),
      contactTelephone: new FormControl(null),
    });
    this.getUserInfo();
  }

  async getUserInfo() {
     await this.authService.getUserInfo().subscribe(res => {
        this.patchForm(res);
     });
  }

  patchForm(res) {
    this.form.patchValue({
      companyName: res.companyName,
      contactPersonName: res.contactPersonName,
      contactEmail: res.email,
      contactSkype: res.contactSkype,
      contactTelephone: res.contactTelephone,
    });
    MaterialService.updateTextInputs();
  }

  ngOnDestroy() {
    this.loadingDate.destroy();
    this.dischargeDate.destroy();
  }

  ngAfterViewInit() {
    this.loadingDate = MaterialService.initDatepicker(this.loadingRef, this.validateDateInput.bind(this));
    this.dischargeDate = MaterialService.initDatepicker(this.dischargeRef, this.validateDateInput.bind(this));
  }

  validateDateInput() {
    if (!this.loadingDate.date || !this.dischargeDate.date) {
      this.isValid = true;
      return;
    }

    this.isValid = this.loadingDate.date < this.dischargeDate.date;
  }

  onSubmit() {
    this.form.disable();
    let obs$;
    const body = {
      loadingDate: this.loadingDate.date,
      dischargeDate: this.dischargeDate.date,
      loadingPoint: this.form.value.loadingPoint,
      dischargePoint: this.form.value.dischargePoint,
      typeTransport: this.form.value.typeTransport,
      amountTransport: this.form.value.amountTransport,
      loadCapacity: this.form.value.loadCapacity,
      companyName: this.form.value.companyName,
      contactPersonName: this.form.value.contactPersonName,
      contactEmail: this.form.value.contactEmail,
      contactSkype: this.form.value.contactSkype,
      contactTelephone: this.form.value.contactTelephone,
    };
    obs$ = this.transportService.createNewTransport(body);

    obs$.subscribe(
      (transport) => {
        this.transport = transport;
        MaterialService.toast('New transport saved!');
        this.resetForm();
        this.form.enable();
      },
      (error) => {
        MaterialService.toast(error.name);
        this.form.enable();
      },
    );
  }

  resetForm() {
    this.form.reset();
    MaterialService.updateTextInputs();
  }

  onShowMap() {
    this.showMap ? this.showMap = false : this.showMap = true;
  }
}
