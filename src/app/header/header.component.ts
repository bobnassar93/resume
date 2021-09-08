import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarlinks!: NodeListOf<HTMLAnchorElement>;
  navbarToggle!: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.navbarToggle = document.querySelector('.mobile-nav-toggle') as HTMLElement;
    this.navbarlinks = document.querySelectorAll('#navbar .scrollto');

    this.navbarlinksActive();
  }

  /**
   * Navbar links active state on scroll
   */
  @HostListener('document:scroll')
  navbarlinksActive = () => {
    let position = window.scrollY + 330
    this.navbarlinks.forEach((navbarlink: any) => {
      if (!navbarlink.hash) return
      let section = document.querySelector(navbarlink.hash) as HTMLAnchorElement;
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }

  hideSideBar = (): void => {
    if (document.querySelector('body')!.classList.contains('mobile-nav-active'))
      document.querySelector('body')!.classList.toggle('mobile-nav-active');
    this.navbarToggle.classList.toggle('bi-list');
    this.navbarToggle.classList.toggle('bi-x');
  }
}
