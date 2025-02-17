import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenuActive = false;
  isScrolling = false;
  urlPath: any;
  isNotLandingPage = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolling = window.scrollY > 0;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.urlPath = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const [basePath] = event.urlAfterRedirects.split('?');
        this.isNotLandingPage =
          basePath === '/contact-us' || basePath === '/about-us';
      }
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
