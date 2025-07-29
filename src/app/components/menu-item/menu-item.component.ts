import { Component,input,signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatListModule} from '@angular/material/list'
import { MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-menu-item',
  imports: [MatListModule,MatIconModule,RouterModule,CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  animations: [
    trigger('expandContracMenu',[
      transition(':enter',[
        style({opacity: 0, height:'0px'}),
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent {
 item = input.required<MenuItem>();
 collapsed = input(false);
 nestedMenuOpen=signal(false);
 
 toggleNested(){
  console.log(this.nestedMenuOpen());
 
  if(!this.item().subItems){
    console.log('¡Hola desde Angular!');
    return;
  }
  this.nestedMenuOpen.set(!this.nestedMenuOpen());
  console.log(this.nestedMenuOpen());
 }
}
