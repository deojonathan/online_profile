import { Component, OnInit } from '@angular/core';
import { MatTabLink } from '@angular/material/tabs/tab-nav-bar/tab-nav-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeLink: number = 0;
  tabs = [
    { routerLink: 'home', label: 'Home', icon: 'home'},
    { routerLink: 'portfolio', label: 'Portfolio', icon: 'dashboard'},
    { routerLink: 'services', label: 'Services', icon: 'miscellaneous_services'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  tabClicked(id: number) {
    this.activeLink = id;
  }
}
