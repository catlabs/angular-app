import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  @Input() apiPath: String;
  @Input() displayedColumns: Array<String>;

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

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  	this.getItems();
    //console.log(this.apiPath);
  }

  handlePageEvent(e){
    this.paginationInfos.page = e.pageIndex + 1;
    this.paginationInfos.itemsByPage = e.pageSize;
    this.params.page = e.pageIndex + 1;
    this.params.itemsByPage = e.pageSize;
    this.getItems();
  }

  handleSortChange(e){
    console.log(e);
    if(e.direction){
      this.params['sort'] = e.active+':'+e.direction;
    }else{
      delete this.params['sort'];
    }
    this.getItems();
    //this.sortInfos = e;
  }

  getItems(): void {
    this.isLoading = true;
    this.apiService.getItems(this.apiPath, this.params).subscribe(result => {
      this.isLoading = false;
      this.items = result.data;
      this.paginationInfos.total = result.total; 
    });
  }

}
