import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  services: Service[] = [
    {
      icon: '🚀',
      title: 'Single Page Applications',
      description: 'Fast, responsive SPAs with Angular, optimized performance, and seamless user experience'
    },
    {
      icon: '🎨',
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect conversion of designs into clean, maintainable HTML/CSS/SCSS code'
    },
    {
      icon: '📊',
      title: 'Complex State Management',
      description: 'Scalable architecture with NgRx/NGXS for enterprise applications with complex data flows'
    },
    {
      icon: '🔄',
      title: 'API Integration',
      description: 'RESTful API integration with RxJS for reactive data handling and real-time updates'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first development ensuring perfect display across all devices and screen sizes'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Code splitting, lazy loading, and performance tuning for lightning-fast applications'
    }
  ];
}
