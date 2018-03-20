import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bars-table',
  templateUrl: './bars-table.component.html',
  styleUrls: ['./bars-table.component.css']
})
export class BarsTableComponent implements OnInit {
  //@Input() items: Array<any>;
  //@Input() selection: any;

  //@Output() change: EventEmitter<any> = new EventEmitter();
  //@Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /*changeSelect(e, row){
    //console.log(e);
    //console.log(row);
    if(e.checked){
      //this.selection.toggle(row);
    }
    this.selection.toggle(row);
    console.log(this.selection.selected);
  }*/
  handleSelect(e, row){
    //this.select.emit({event: e, row: row});
    //console.log(e);
  }

  handleChange(type, data){
  	//this.change.emit({type: type, data: data});
    //console.log(e);
  }

}
