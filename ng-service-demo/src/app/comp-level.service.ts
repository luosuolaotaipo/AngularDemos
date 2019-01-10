import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CompLevelService {
  private _id:string;
  compCounter: number;

  constructor() { 
    this.compCounter = 0;
    this._id = UUID.UUID();
  }

  get id():string{
    return this._id;
  }
}
