import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { WeatherComponent } from '../weather/weather.component';
@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
} )
export class HomeComponent implements OnInit {

    welcomeMessage = "Hellsing IO is the proving and playground for Hellsing web projects. \t Welcome to this working exhibit."

    constructor() {
    }

    ngOnInit() {

    }

}
