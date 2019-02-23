import { Component } from '@angular/core';
import { $ } from 'jquery'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    onInit() {
        $(window).scroll(function () {
            sessionStorage.scrollTop = $(this).scrollTop();
        });

        $(document).ready(function () {
            if (sessionStorage.scrollTop !== 'undefined') {
                $(window).scrollTop(sessionStorage.scrollTop);
            }
        });
    }
}
