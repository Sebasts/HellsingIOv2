import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {HostListener} from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoText = 'Hellsing';
  constructor() {
  }

  ngOnInit() {
  }

  public click() {
    console.log("I am clicked!");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
      var x = document.getElementById("myTopnav");
    if (window.scrollY > 10) {
      if (x.className.endsWith("topnav ")) {
        x.className += "scrolled";
      }
    }else{
      x.className = "topnav ";
    }
  }

}
