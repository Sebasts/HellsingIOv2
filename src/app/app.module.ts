import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSpotlightComponent } from './blog-spotlight/blog-spotlight.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogSpotlightComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
