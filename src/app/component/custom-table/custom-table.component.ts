import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Bar } from '../../services/bar';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
	displayedColumns = ['name', 'street'];
  bars: Bar[] = [];
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

  handlePageEvent(e){
    console.log(e);
  }

  getBars(): void {
    this.apiService.getBars().subscribe(bars => this.bars = bars);
  }

}
