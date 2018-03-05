import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

	constructor(private http: HttpClient) {}

  getItem(apiPath): Observable<any>{
  	return this.http.get<any>(environment.apiUrl+apiPath)
	}

	getItems(apiPath, params = {}): Observable<any> {
	  return this.http.get<any[]>(environment.apiUrl+apiPath, { params: params })
	}

	updateItem(apiPath, form){
		return this.http.put<any>(environment.apiUrl+apiPath, form);
	}
}
