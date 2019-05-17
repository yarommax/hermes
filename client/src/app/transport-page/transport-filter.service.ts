import { Injectable } from '@angular/core';
import { Transport } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransportFilterService {
  filteredTransport: Transport[] = [];
  constructor() {}

  filter(form, transports) {
    this.filteredTransport = [];
    let startPoint;
    let endPoint;
    if (form.value.startPoint) {
      startPoint = form.value.startPoint.toLowerCase();
    }
    if (form.value.endPoint) {
      endPoint = form.value.endPoint.toLowerCase();
    }

    transports.filter( (car) => {
      if (car.loadingPoint.toLowerCase() === startPoint ||
        car.dischargePoint.toLowerCase() === endPoint) {
        this.filteredTransport.push(car);
      }
    });
    return this.filteredTransport;
  }
}
