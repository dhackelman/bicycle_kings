import { Component, OnInit } from '@angular/core';
import { King } from '../king';
import { KingService } from '../king.service'
// import { KINGS } from '../mock-kings';

@Component({
  selector: 'app-heroes',
  templateUrl: './kings.component.html',
  styleUrls: ['./kings.component.css']
})
export class KingsComponent implements OnInit {
    kings : King[]; 
    selectedKing: King; 
    
    getKings(): void {
      this.kings = this.kingService.getKings();
    }
    
    onSelect(king: King): void {
        this.selectedKing = king; 
    }
  constructor(private kingService: KingService) { }
  
  ngOnInit() {
      this.getKings();
  }

}
