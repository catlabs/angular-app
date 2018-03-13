import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bars-table',
  templateUrl: './bars-table.component.html',
  styleUrls: ['./bars-table.component.css']
})
export class BarsTableComponent implements OnInit {
	@Input() items: Array<any>;
	@Input() displayedColumns: Array<any>;

	@Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleChange(type, data){
  	this.change.emit({type: type, data: data});
    //console.log(e);
  }

}
