import { Component,computed,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import{CustomSidenavComponent} from '../app/components/custom-sidenav/custom-sidenav.component'
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatToolbarModule,MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
    MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo2Angular';
  collapsed= signal(false);
  sidenavWidth= computed(() => this.collapsed() ? '65px' : '250px');
}
