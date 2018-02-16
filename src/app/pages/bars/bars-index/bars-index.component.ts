import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bar } from '../../../services/bar';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-bars-index',
  templateUrl: './bars-index.component.html',
  styleUrls: ['./bars-index.component.css']
})
export class BarsIndexComponent implements OnInit {
  bars: Bar[];
	bar: Bar = {
    id: 1,
    name: 'Windstorm',
    address: 'test',
    city: 'test',
    zip: 'test'
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBars();
  }

  getBars(): void {
    this.apiService.getBars().subscribe(bars => this.bars = bars);
  }

}
