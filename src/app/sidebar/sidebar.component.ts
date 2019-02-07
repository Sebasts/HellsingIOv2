import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    sidebarPosition: String = 'open';

    constructor() { }

    ngOnInit() {
    }

    public toggleNav(): void {

        if (this.sidebarPosition === 'open') {
            this.sidebarPosition = 'close';
        } else {
            this.sidebarPosition = 'open';
        }
    }

}
