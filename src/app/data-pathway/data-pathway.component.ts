import { Component, OnInit } from '@angular/core';
import { DataPathwayService } from '../data-pathway.service';

@Component({
  selector: 'app-data-pathway',
  templateUrl: './data-pathway.component.html',
  styleUrls: ['./data-pathway.component.css']
})
export class DataPathwayComponent implements OnInit {

    constructor(private dataPathway: DataPathwayService) { }

  ngOnInit() {
  }

}
