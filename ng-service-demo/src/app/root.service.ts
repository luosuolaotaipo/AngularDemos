import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  public rootCounter: number;
  constructor() {
    this.rootCounter = 0;
  }
}
