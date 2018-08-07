import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from "@angular/core";
import { ViewChild } from "@angular/core";

@Component( {
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
} )
export class ClockComponent implements OnInit {
    @ViewChild('time')time: string;

    constructor() {
        window.setInterval( this.keepTime, 1000 );

    }

    ngOnInit() {
    }

    keepTime() {
        var timeContainer = document.getElementById( "time" );
        timeContainer.innerHTML = new Date().toLocaleString();
    }

}
