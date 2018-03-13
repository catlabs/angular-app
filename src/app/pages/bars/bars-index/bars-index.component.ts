import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BarsTableComponent } from '../bars-table/bars-table.component';

@Component({
  selector: 'app-bars-index',
  templateUrl: './bars-index.component.html',
  styleUrls: ['./bars-index.component.css']
})
export class BarsIndexComponent implements OnInit {
  table = BarsTableComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }
}
