import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cargo } from '../../shared/interfaces';
import { MaterialDatePicker, MaterialService } from '../../shared/etc/material.service';
import { CargoService } from '../../shared/services/cargo.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit, AfterViewInit, OnDestroy {

  form: FormGroup;
  cargo: Cargo;
  @ViewChild('select') selectRef: ElementRef;
  isValid = true;
  @ViewChild('startLoading') startLoadingRef: ElementRef;
  @ViewChild('endLoading') endLoadingRef: ElementRef;
  startLoading: MaterialDatePicker;
  endLoading: MaterialDatePicker;
  obs$;

  constructor(private cargoService: CargoService,
              private authService: AuthService) { }

  ngOnInit() {
    MaterialService.initSelectField(this.selectRef);

    this.form = new FormGroup({
      startLoadingDate: new FormControl(null),
      endLoadingDate: new FormControl(null),
      loadingPoint: new FormControl(null),
      dischargePoint: new FormControl(null),

      typeCargo: new FormControl(null),
      cargoWeight: new FormControl(null),
      cargoVolume: new FormControl(null),
      typeTransport: new FormControl(null, Validators.required),
      amountTransport: new FormControl(null, [Validators.required, Validators.min(1)]),

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
    this.startLoading.destroy();
    this.endLoading.destroy();
  }

  ngAfterViewInit() {
    this.startLoading = MaterialService.initDatepicker(this.startLoadingRef, this.validateDateInput.bind(this));
    this.endLoading = MaterialService.initDatepicker(this.endLoadingRef, this.validateDateInput.bind(this));
  }

  validateDateInput() {
    if (!this.startLoading.date || !this.endLoading.date) {
      this.isValid = true;
      return;
    }

    this.isValid = this.startLoading.date < this.endLoading.date;
  }

  onSubmit() {
    this.form.disable();

    const body = {
      startLoadingDate: this.startLoading.date,
      endLoadingDate: this.endLoading.date,
      loadingPoint: this.form.value.loadingPoint,
      dischargePoint: this.form.value.dischargePoint,


      typeCargo: this.form.value.typeCargo,
      cargoWeight: this.form.value.cargoWeight,
      cargoVolume: this.form.value.cargoVolume,
      typeTransport: this.form.value.typeTransport,
      amountTransport: this.form.value.amountTransport,

      companyName: this.form.value.companyName,
      contactPersonName: this.form.value.contactPersonName,
      contactEmail: this.form.value.contactEmail,
      contactSkype: this.form.value.contactSkype,
      contactTelephone: this.form.value.contactTelephone,
    };

    this.obs$ = this.cargoService.createNewCargo(body);

    this.obs$.subscribe(
      (cargo) => {
        this.cargo = cargo;
        MaterialService.toast('New cargo saved!');
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
}
