import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  age: number = 28;
  bdMonth: boolean = false;
  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.age = date.getFullYear() - 1993;

    // if Month equals August
    if (date.getMonth() === 7) {
      this.bdMonth = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.bdMonth === true)
      this.enableToolTip();
  }

  enableToolTip(): void {
    var span = document.querySelector('#bd') as HTMLSpanElement;
    new bootstrap.Tooltip(span, {
      title: 'Happy Birthday!',
      placement: 'top'
    })
  }

}
