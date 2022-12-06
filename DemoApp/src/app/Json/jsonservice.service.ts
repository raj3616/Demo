import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formval } from '../rform/rform.component';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  public _allData: formval[] = [];

  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  getalluser() {
    return this.http.get(this.url);
  }

  savealluser(data: formval) {
    console.warn(data);
    this._allData.push(data);
    return this.http.post(this.url, data);
  }
}
