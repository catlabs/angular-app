import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Bar } from './Bar'; 

@Injectable()
export class ApiService {
	private barsUrl = 'http://api.bars-qui-resistent.local/bars';  // URL to web api

	constructor(private http: HttpClient) {

	}

	getBars(): Observable<Bar[]> {
	  return this.http.get<Bar[]>(this.barsUrl)
	}
}
