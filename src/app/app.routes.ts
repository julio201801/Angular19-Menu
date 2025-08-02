import { Routes } from '@angular/router';
import {ContentComponent} from '../app/pages/content/content.component'
import{AnalyticsComponent} from '../app/pages/analytics/analytics.component'
import { VideosComponent } from './pages/content/videos/videos.component';
import { PlaylistComponent } from './pages/content/playlist/playlist.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path:'login',
        component: LoginComponent      
    },
    {
        path:'layout',
        component: LayoutComponent,
        children: [
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
        ]
    }
    
];
