import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSpotlightComponent } from './blog-spotlight/blog-spotlight.component';
import { DataPathwayComponent } from './data-pathway/data-pathway.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectdisplayComponent } from './projectdisplay/projectdisplay.component';
import { SlamDominoesComponent } from './slam-dominoes/slam-dominoes.component';
import { MenuComponent } from './nav/menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { MotivatorComponent } from './motivator/motivator.component';
import { HttpClientXsrfModule } from "@angular/common/http";
import { WeatherComponent } from './weather/weather.component';
import { ClockComponent } from './clock/clock.component';


@NgModule( {
    declarations: [
        AppComponent,
        BlogComponent,
        BlogSpotlightComponent,
        DataPathwayComponent,
        DashboardComponent,
        HeaderComponent,
        NavComponent,
        HomeComponent,
        ContactComponent,
        ProjectdisplayComponent,
        SlamDominoesComponent,
        MenuComponent,
        ProfileComponent,
        MotivatorComponent,
        WeatherComponent,
        ClockComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
