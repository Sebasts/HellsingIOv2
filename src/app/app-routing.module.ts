import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogSpotlightComponent } from './blog-spotlight/blog-spotlight.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectdisplayComponent } from './projectdisplay/projectdisplay.component';
import { SlamDominoesComponent } from './slam-dominoes/slam-dominoes.component';
import { MenuComponent } from './nav/menu/menu.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: 'blogs', component: BlogComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'blog-spotlight/:id', component: BlogSpotlightComponent},
    { path: 'contactus', component: ContactComponent },
    { path: 'home', component: HomeComponent,
        children: [
                   { path: '', redirectTo: 'home/blog', pathMatch: 'full' },
                   {path: 'home/blog', component: BlogComponent, outlet:'sub-home'},
                   ]
    },
    { path: 'home', component: ProjectdisplayComponent },
    { path: 'projects', component: ProjectdisplayComponent },
    { path: 'slam', component: SlamDominoesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }];
@NgModule( {
    imports: [RouterModule.forRoot( routes )],
        exports : [RouterModule]
})

export class AppRoutingModule { }
