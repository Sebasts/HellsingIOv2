import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivator',
  templateUrl: './motivator.component.html',
  styleUrls: ['./motivator.component.css']
})
export class MotivatorComponent implements OnInit {
  quote: string;
   quotes: string[] = [
                       ""
       
                       ];
  constructor() {
      
  }

  ngOnInit() {
  }

}
