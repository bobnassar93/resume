import { Component, OnInit } from '@angular/core';
declare const Waypoint: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initSkillsAnimation();
  }

  initSkillsAnimation = (): void => {
    /**
   * Skills animation
   */
    let skilsContent = document.querySelector('.skills-content') as HTMLDivElement;
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function (direction: any) {
          let progress = document.querySelectorAll('.progress .progress-bar') as NodeListOf<HTMLDivElement>;
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      });
    }
  }
}
