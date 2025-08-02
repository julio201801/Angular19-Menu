import { Component,computed,inject,signal } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import{CustomSidenavComponent} from '../custom-sidenav/custom-sidenav.component'
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,MatToolbarModule,MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      CustomSidenavComponent,
      MatMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
 title = 'demo2Angular';
  collapsed= signal(false);
  sidenavWidth= computed(() => this.collapsed() ? '65px' : '250px');
  router=inject(Router);
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
