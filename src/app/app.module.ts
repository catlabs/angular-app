import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CustomTableModule } from './components/custom-table/custom-table.module';

import { AppComponent } from './app.component';
import { BarsIndexComponent } from './pages/bars/bars-index/bars-index.component';
import { BarsDetailsComponent } from './pages/bars/bars-details/bars-details.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    BarsIndexComponent,
    BarsDetailsComponent
  ],
  imports: [
    CustomTableModule,
    SharedModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
