import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CustomTableModule } from './components/custom-table/custom-table.module';

import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BarsIndexComponent } from './pages/bars/bars-index/bars-index.component';
import { BarsDetailsComponent } from './pages/bars/bars-details/bars-details.component';
import { BarsTableComponent } from './pages/bars/bars-table/bars-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BarsIndexComponent,
    BarsDetailsComponent,
    BarsTableComponent
  ],
  entryComponents: [BarsTableComponent],
  imports: [
    CustomTableModule,
    SharedModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
