import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {ApiService} from '../../services/api.service';
import { TableHostDirective } from './table-host.directive';
import { BarsTableComponent } from '../../pages/bars/bars-table/bars-table.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  @Input() apiPath: String;
  @Input() c: Type<any>;

  @ViewChild(TableHostDirective) tableHost: TableHostDirective;

  //displayedColumns = ['select', 'name', 'street'];
  displayedColumns = ['name', 'street'];
  selection = new SelectionModel<Element>(true, []);
  componentRef;
  isLoading = false;
  items = [];
  paginationInfos = {
    page: 1,
    itemsByPage: 10,
    total: 0
  };
  params = {
    page: 1,
    itemsByPage: 10,
    total: 0
  };

  constructor(public apiService: ApiService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.c);
    
    let viewContainerRef = this.tableHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    /*this.componentRef.instance.selection = this.selection;
    this.componentRef.instance.change.subscribe((e) => this.handleChange(e));
    this.componentRef.instance.select.subscribe((e) => this.handleSelect(e));*/
    this.getItems();
  }

  handleChange(type, e){
    switch (type) {
      case "search":
        if(e) this.params['search'] = e;
        break;

      case "sort":
        if(e.direction){
          this.params['sort'] = e.active+':'+e.direction;

        }else{
          delete this.params['sort'];
        }
        break;
    }
    this.getItems();
  }

  handleSelect(row, e){
    //console.log(e);
    //console.log(row);
    if(e.checked){
      //this.selection.toggle(row);
    }
    this.selection.toggle(row);
    console.log(this.selection.selected);
  }

  handlePageEvent(e){
    this.paginationInfos.page = e.pageIndex + 1;
    this.paginationInfos.itemsByPage = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.params.itemsByPage = e.pageSize;
    this.getItems();
  }

  getItems(): void {
    this.isLoading = true;
    this.apiService.getItems(this.apiPath, this.params).subscribe(result => {
      this.isLoading = false;
      this.items = result.data;
      this.paginationInfos.total = result.total; 
      this.componentRef.instance.items = this.items;
    });
  }

}
