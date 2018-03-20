import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bar } from '../../../services/bar';

@Component({
  selector: 'app-bars-details',
  templateUrl: './bars-details.component.html',
  styleUrls: ['./bars-details.component.css']
})
export class BarsDetailsComponent implements OnInit {
  id: Number;
  bar: any = {};

  detailsForm: FormGroup;

  constructor(private apiService:ApiService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      name: ['', Validators.required ],
      street: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getItems('/bars/'+this.id)
      .subscribe(bar => {
        this.detailsForm.setValue({
          name: bar.name,
          street: bar.street
        });
      });
  }

  onSubmit() { 
    this.apiService.updateItem('/bars/'+this.id, this.detailsForm.value)
      .subscribe();
  }
  
}
