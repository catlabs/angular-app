import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  @Input() apiPath: String;

	displayedColumns = ['name', 'street'];
  items = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	this.getItems();
    //console.log(this.apiPath);
  }

  handlePageEvent(e){
    console.log(e);
  }

  getItems(): void {
    this.apiService.getItems(this.apiPath).subscribe(items => this.items = items);
  }

}
