import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferCargo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private httpClient: HttpClient) {}

  offerCargo(offer: OfferCargo) {
    console.log(offer);
    return this.httpClient.post<OfferCargo[]>('/api/cargo', offer);
  }
}
