import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
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
  @Input() displayedColumns: Array<String>;
  @Input() c: Type<any>;

  @ViewChild(TableHostDirective) tableHost: TableHostDirective;

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
    this.componentRef.instance.displayedColumns = this.displayedColumns;
    this.componentRef.instance.change.subscribe((e) => this.handleChange(e));
    this.getItems();
  }

  handleChange(e){
    switch (e.type) {
      case "search":
        if(e.data) this.params['search'] = e.data;
        break;

      case "sort":
        if(e.data.direction){
          this.params['sort'] = e.data.active+':'+e.data.direction;

        }else{
          delete this.params['sort'];
        }
        break;
    }
    this.getItems();
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
