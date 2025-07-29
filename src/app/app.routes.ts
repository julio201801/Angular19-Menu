import { Routes } from '@angular/router';
import {DashboardComponent} from '../app/pages/dashboard/dashboard.component'
import {ContentComponent} from '../app/pages/content/content.component'
import{AnalyticsComponent} from '../app/pages/analytics/analytics.component'
import { VideosComponent } from './pages/content/videos/videos.component';
import { PlaylistComponent } from './pages/content/playlist/playlist.component';
export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
    },
    {
        path:'dashboard',
        component: DashboardComponent      
    },
    {
        path:'content',
        component: ContentComponent,
        children: [
            {
                path:'videos',
                component: VideosComponent 
            },
            {
                path:'playlist',
                component: PlaylistComponent 
            },
        ]

    },
    {
        path:'analytics',
        component: AnalyticsComponent
    }
];
