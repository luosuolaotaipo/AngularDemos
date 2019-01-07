import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompLevelService {

  compCounter: number;

  constructor() { 
    this.compCounter = 0;
  }
}
