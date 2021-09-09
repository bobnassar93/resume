import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Typed('.typed', {
      strings: ['a Full Stack Web Developer', 'a Freelancer'],
      loop: true,
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 2000
    });
  }


}
