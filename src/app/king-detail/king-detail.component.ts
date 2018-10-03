import { Component, OnInit, Input } from '@angular/core';
import {King} from '../king'; 

@Component({
  selector: 'app-king-detail',
  templateUrl: './king-detail.component.html',
  styleUrls: ['./king-detail.component.css']
})
export class KingDetailComponent implements OnInit {
    @Input() king: King; 
  constructor() { }

  ngOnInit() {
  }

}
