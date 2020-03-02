import { SearchByFilterComponent } from './search-by-filter/search-by-filter.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private finaldata = [];
  private apiurl = 'https://data.sfgov.org/resource/vmnk-skih.json';

  constructor(private http: HttpClient) { }
  getData() {
    console.log('get');
    return this.http.get(this.apiurl);

  }



}
