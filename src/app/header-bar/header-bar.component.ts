import { Component } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [TabMenuModule ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {


  items!: MenuItem[];
  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
        {label: 'Home',  routerLink: '/home', routerLinkActiveOptions: this.activeItem},
        // {label: 'Calendar', routerLink: '/movie/:id', routerLinkActiveOptions: this.activeItem},
    ];
    this.activeItem = this.items[0];
  }

}
