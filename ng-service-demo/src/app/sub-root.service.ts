import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
@Injectable({
  providedIn: 'root'
})
export class SubRootService {
  private _id:string;
  public subRootCounter: number;
  constructor() {
    this.subRootCounter = 0;
    this._id = UUID.UUID();
   }
  get id():string{
    return this._id;
  }
}
