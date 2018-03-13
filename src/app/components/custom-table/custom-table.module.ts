import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SharedModule } from './../../shared.module';
import { CustomTableComponent } from './custom-table.component';
import { TableHostDirective } from './table-host.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [TestComponent],
  exports: [
    CustomTableComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    CustomTableComponent,
    TableHostDirective,
    TestComponent
  ],
  providers: []
})
export class CustomTableModule { }
