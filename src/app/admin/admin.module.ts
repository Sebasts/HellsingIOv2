import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { adminRoutes } from './admin.routes';

@NgModule({

  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
