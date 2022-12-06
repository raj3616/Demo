import { Injectable } from '@angular/core';
import { formval } from './rform/rform.component';

@Injectable()
export class LocalServiceService {


  public _allData: formval[] = [];

  constructor() { }

  getalluser() {
    return this._allData;
  }

  savealluser(data: any) {
    this._allData.push(data);
  }

}
