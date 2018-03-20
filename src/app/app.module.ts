import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BarsIndexComponent } from './pages/bars/bars-index/bars-index.component';
import { BarsDetailsComponent } from './pages/bars/bars-details/bars-details.component';
import { BarsTableComponent } from './pages/bars/bars-table/bars-table.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { TableHostDirective } from './components/custom-table/table-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    BarsIndexComponent,
    BarsDetailsComponent,
    BarsTableComponent,
    CustomTableComponent,
    TableHostDirective
  ],
  entryComponents: [BarsTableComponent],
  imports: [
    SharedModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
