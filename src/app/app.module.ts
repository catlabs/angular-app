import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CustomTableModule } from './component/custom-table/custom-table.module';

import { AppComponent } from './app.component';
import { BarsIndexComponent } from './pages/bars/bars-index/bars-index.component';
import { BarsDetailsComponent } from './pages/bars/bars-details/bars-details.component';

import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    BarsIndexComponent,
    BarsDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CustomTableModule,
    HttpClientModule
  ],
  providers: [
  	ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
