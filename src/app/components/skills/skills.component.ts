import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  mainSkills = [
    'Angular', 'TypeScript', 'HTML', 'CSS/SCSS', 'JavaScript',
    'RxJS', 'NgRx', 'NGXS', 'REST APIs', 'Git'
  ];
}
