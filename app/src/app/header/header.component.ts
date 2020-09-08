import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  isMobile: boolean = true;
  activeLink: number = 0;
  tabs = [
    { routerLink: 'home', label: 'Home', icon: 'home'},
    { routerLink: 'portfolio', label: 'Portfolio', icon: 'dashboard'},
    { routerLink: 'services', label: 'Services', icon: 'miscellaneous_services'},
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
    ]).pipe(takeUntil(this.unsubscribe)).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  tabClicked(id: number) {
    this.activeLink = id;
  }

  activateMobileLayout() {
    console.log("mobile layout detected");
  }
}
