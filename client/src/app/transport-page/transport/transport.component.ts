import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../../shared/interfaces';
import { TransportService } from '../../shared/services/transport.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  car$: Observable<Transport>;
  constructor(private transportService: TransportService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    const id = this.route.snapshot.params.id;
    console.log(id);
    this.car$ = this.transportService.getCarById(id);
  }

}
