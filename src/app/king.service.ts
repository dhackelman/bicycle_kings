import { Injectable } from '@angular/core';
import { King } from './king';
import { KINGS } from './mock-kings';

@Injectable({
  providedIn: 'root'
})
export class KingService {
    
    getKings(): King[] {
        return KINGS;
    }
    
  constructor() { }
}
