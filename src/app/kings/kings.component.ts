import { Component, OnInit } from '@angular/core';
import { King } from '../king';
import { KINGS } from '../mock-kings';

@Component({
  selector: 'app-heroes',
  templateUrl: './kings.component.html',
  styleUrls: ['./kings.component.css']
})
export class KingsComponent implements OnInit {
    kings = KINGS; 
    selectedKing: King; 
    
    onSelect(king: King): void {
        this.selectedKing = king; 
    }
  constructor() { }
  
  ngOnInit() {
  }

}
