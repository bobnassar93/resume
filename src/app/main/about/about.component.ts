import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  age: number = 28;
  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.age = date.getFullYear() - 1993;
  }

}
