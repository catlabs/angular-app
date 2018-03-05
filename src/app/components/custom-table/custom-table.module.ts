import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SharedModule } from './../../shared.module';
import { CustomTableComponent } from './custom-table.component';


@NgModule({
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    CustomTableComponent
  ],
  declarations: [
    CustomTableComponent
  ],
  providers: []
})
export class CustomTableModule { }
