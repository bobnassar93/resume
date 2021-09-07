import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  backtotop!: HTMLButtonElement;
  navbarToggle!: HTMLElement;
  constructor() { }


  ngOnInit(): void {

    this.navbarToggle = document.querySelector('.mobile-nav-toggle') as HTMLElement;

   
   // Back to top button
    this.backtotop = document.querySelector('.back-to-top') as HTMLButtonElement;

    if (this.backtotop) {
      this.toggleBacktotop();
    }


  }

  @HostListener('document:scroll')
  toggleBacktotop(): void {
    if (window.scrollY > 100) {
      this.backtotop.classList.add('active')
    } else {
      this.backtotop.classList.remove('active')
    }
  }

  /**
   * Mobile nav toggle
   */

  initNvbarToggle = () => {
    document.querySelector('body')!.classList.toggle('mobile-nav-active');
    this.navbarToggle.classList.toggle('bi-list');
    this.navbarToggle.classList.toggle('bi-x');
  }
}
