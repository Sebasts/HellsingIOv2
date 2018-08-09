import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { DataPathwayService } from "../data-pathway.service";

@Component( {
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
} )
export class ClockComponent implements OnInit {
    time: string;

    constructor(private dataPath:DataPathwayService) {
        window.setInterval( this.keepTime, 1000 );
    }

    ngOnInit() {
    }

    keepTime() {
        var timeContainer = document.getElementById( "time" );
        timeContainer.innerHTML = new Date().toLocaleString();
        
        if(this.dataPath)
        this.dataPath.add(this.time);
 }

}
