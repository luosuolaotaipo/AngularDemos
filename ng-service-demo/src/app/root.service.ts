import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  public rootCounter: number;
  private _id : string;
  constructor() {
    this.rootCounter = 0;
    this._id = UUID.UUID();
  }

  get id():string{
    return this._id;
  }
}
