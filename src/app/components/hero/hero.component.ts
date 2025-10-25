import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText: string = '';
  roles: string[] = [
    'Web Developer',
    'Angular Developer',
    'Frontend Developer',
    'TypeScript Expert'
  ];
  currentRoleIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 50;
  pauseAfterComplete: number = 2000;
  pauseAfterDelete: number = 500;
  private timeoutId: any;

  ngOnInit() {
    this.typeText();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeText() {
    const currentRole = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      // Deleting characters
      this.displayedText = currentRole.substring(0, this.displayedText.length - 1);

      if (this.displayedText === '') {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.timeoutId = setTimeout(() => this.typeText(), this.pauseAfterDelete);
      } else {
        this.timeoutId = setTimeout(() => this.typeText(), this.deletingSpeed);
      }
    } else {
      // Typing characters
      this.displayedText = currentRole.substring(0, this.displayedText.length + 1);

      if (this.displayedText === currentRole) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typeText(), this.pauseAfterComplete);
      } else {
        this.timeoutId = setTimeout(() => this.typeText(), this.typingSpeed);
      }
    }
  }
}
