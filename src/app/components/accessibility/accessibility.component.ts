import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface AccessibilityFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss'
})
export class AccessibilityComponent {
  accessibilityFeatures: AccessibilityFeature[] = [
    {
      icon: '♿',
      title: 'WCAG 2.2 AA Compliance',
      description: 'Building web applications that meet WCAG 2.2 Level AA standards for accessibility'
    },
    {
      icon: '⌨️',
      title: 'Keyboard Navigation',
      description: 'Ensuring full keyboard accessibility with proper focus management and skip links'
    },
    {
      icon: '🎨',
      title: 'Color Contrast',
      description: 'Implementing proper color contrast ratios for text and interactive elements'
    },
    {
      icon: '📱',
      title: 'Screen Reader Support',
      description: 'Semantic HTML and ARIA labels for optimal screen reader experience'
    },
    {
      icon: '🔍',
      title: 'Responsive Text',
      description: 'Scalable text and layouts that work with browser zoom up to 200%'
    },
    {
      icon: '✅',
      title: 'Accessibility Testing',
      description: 'Regular testing with automated tools and assistive technologies'
    }
  ];
}
