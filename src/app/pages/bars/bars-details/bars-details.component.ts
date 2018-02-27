import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../../services/api.service';
import { Bar } from '../../../services/bar';

@Component({
  selector: 'app-bars-details',
  templateUrl: './bars-details.component.html',
  styleUrls: ['./bars-details.component.css']
})
export class BarsDetailsComponent implements OnInit {
  id: Number;
  bar: any = {};

  constructor(private apiService:ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getItems('/bars/'+this.id)
      .subscribe(bar => this.bar = bar);
  }

  onSubmit() { 
    //console.log(this.bar);
    this.apiService.updateItem('/bars/'+this.id, this.bar)
      .subscribe();
  }
  
}
