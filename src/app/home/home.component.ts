import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
} )
export class HomeComponent implements OnInit {
    location: Location;
    newScrollDir: Number;
    oldScrollDir: Number;
    homeContainer: HTMLElement;
    sidebarContainer: HTMLElement;
    homeArrowContainer: HTMLElement;
    homeDiv: HTMLElement;
    bottomContainer: HTMLElement;


    constructor( location: Location ) {
        this.location = location;
        console.log( "Click me" );
    }

    ngOnInit() {
        this.homeContainer = document.getElementById( "header home " );
        this.sidebarContainer = document.getElementById( "homeSideNav " );
        this.homeArrowContainer = document.getElementById( "homeArrow " );
        this.homeDiv = document.getElementById( "mainHomeDiv" );
        this.bottomContainer = document.getElementById( "bottom" );
    }
    @HostListener( "window:scroll", [] )
    onWindowScroll() {
        this.oldScrollDir = this.newScrollDir;
        this.newScrollDir = window.scrollY;
        /*
         * Sets opacity for fading title
         * Figure out how to do this smarter
        */

        if ( window.scrollY > 0 && window.scrollY < 25 ) {
            this.homeContainer.className = "vanish1";
            this.scrollBottom();
        }
        if ( window.scrollY > 24 && window.scrollY < 50 ) {
            this.homeContainer.className = "vanish2";
        } if ( window.scrollY > 49 && window.scrollY < 75 ) {
            this.homeContainer.className = "vanish3";
        }
        if ( window.scrollY > 74 && window.scrollY < 100 ) {
            this.homeContainer.className = "vanish4";
        } if ( window.scrollY > 99 && window.scrollY < 125 ) {
            this.homeContainer.className = "vanish5";
        }
        if ( window.scrollY > 124 && window.scrollY < 150 ) {
            this.bottomContainer.scrollIntoView( true );

        } if ( window.scrollY > 149 && window.scrollY < 175 ) {
            this.homeContainer.className = "vanish7";
        }
        if ( window.scrollY > 174 && window.scrollY < 200 ) {
            this.homeContainer.className = "vanish8";
        } if ( window.scrollY > 199 && window.scrollY < 225 ) {
            this.homeContainer.className = "vanish9";
        }
        if ( window.scrollY > 224 && window.scrollY < 250 ) {
            this.homeContainer.className = "vanish10";
        } if ( window.scrollY > 249 && window.scrollY < 275 ) {
            this.homeContainer.className = "vanish11";
        }
        if ( window.scrollY > 274 && window.scrollY < 300 ) {
            this.homeContainer.className = "vanish13";
        }
        if ( window.scrollY > 299 && window.scrollY < 325 ) {
            this.homeContainer.className = "vanish14";
        }
        if ( window.scrollY > 324 && window.scrollY < 350 ) {
            this.homeContainer.className = "vanish15";
        }
        if ( window.scrollY > 349 && window.scrollY < 375 ) {
            this.homeContainer.className = "vanish16";
        }
        if ( window.scrollY > 374 && window.scrollY < 400 ) {
            this.homeContainer.className = "vanish17";

        }
        if ( window.scrollY > 399 && window.scrollY < 425 ) {
            this.homeContainer.className = "vanish18";
            if ( this.newScrollDir > this.oldScrollDir ) {
                this.homeArrowContainer.className = 'pulseArrow up';
            } else {
                this.homeArrowContainer.className = 'pulseArrow down';
            }
        }
        if ( window.scrollY > 424 && window.scrollY < 450 ) {
            this.homeContainer.className = "vanish19";
        }
        if ( window.scrollY > 424 ) {
            if ( this.newScrollDir > this.oldScrollDir ) {
                this.sidebarContainer.className = "sideBar fadeIn";
                this.homeDiv.className = "blogBody fadeIn";
            } else {
                this.sidebarContainer.className = "sideBar fadeAway";
                this.homeDiv.className = "blogBody fadeAway";
            }
        }
    }
    
    public scrollBottom(){
        //window.scrollTo(left loc, top loc, bevahvior  
        window.scrollTo({left:0, top:0, behavior:'smooth'});
    }
}
