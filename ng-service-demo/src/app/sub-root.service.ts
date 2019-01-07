import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubRootService {
  public subRootCounter: number;
  constructor() {
    this.subRootCounter = 0;
   }
}
