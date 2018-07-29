import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogSpotlightComponent } from './blog-spotlight/blog-spotlight.component';

const routes: Routes = [
    { path: 'blogs', component: BlogComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'blog-spotlight/:id', component: BlogSpotlightComponent},
    { path: '', redirectTo:'/dashboard', pathMatch: 'full'}
];
@NgModule( {
    imports: [RouterModule.forRoot( routes )],
        exports : [RouterModule]
})

export class AppRoutingModule { }
