import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsIndexComponent } from './pages/bars/bars-index/bars-index.component';
import { BarsDetailsComponent } from './pages/bars/bars-details/bars-details.component';

const routes: Routes = [
  { path: 'bars', component: BarsIndexComponent },
  { path: 'bars/:id', component: BarsDetailsComponent },
  { path: '',
    redirectTo: '/bars',
    pathMatch: 'full'
  }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule],
  	declarations: []
})
export class AppRoutingModule {}
