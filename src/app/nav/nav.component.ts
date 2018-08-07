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

}
