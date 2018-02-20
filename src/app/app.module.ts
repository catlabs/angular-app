import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BarsIndexComponent } from './pages/bars/bars-index/bars-index.component';
import { BarsDetailsComponent } from './pages/bars/bars-details/bars-details.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
  	ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
