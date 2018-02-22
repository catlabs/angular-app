import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CustomTableComponent } from './custom-table.component';

import {ApiService} from '../../services/api.service';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CustomTableComponent
  ],
  declarations: [
    CustomTableComponent
  ],
  providers: [
  	ApiService
  ]
})
export class CustomTableModule { }
