import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service'; // <-- Make sure this matches the file name

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSpotlightComponent } from './blog-spotlight/blog-spotlight.component';
import { DataPathwayComponent } from './data-pathway/data-pathway.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule( {
    declarations: [
        AppComponent,
        BlogComponent,
        BlogSpotlightComponent,
        DataPathwayComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
                InMemoryDataService, { dataEncapsulation: false }
              )
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
