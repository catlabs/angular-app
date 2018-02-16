import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
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
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  	ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
