# Implementation Examples

This document provides code examples of the key features implemented in this Angular portfolio website.

## 1. Scroll-Triggered Animation Directive

### Directive Implementation
**File:** `src/app/directives/scroll-animation.directive.ts`

```typescript
import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationType: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' = 'fade-in';
  @Input() animationDelay: number = 0;

  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Initially hide the element
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', `all 0.8s ease-out ${this.animationDelay}ms`);

    // Set initial transform based on animation type
    switch (this.animationType) {
      case 'slide-in-left':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-50px)');
        break;
      case 'slide-in-right':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(50px)');
        break;
      case 'slide-in-up':
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
        break;
    }

    // Check if element is already in viewport on load
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.hasAnimated) {
      this.checkVisibility();
    }
  }

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Trigger animation when element is 80% visible in viewport
    if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
      this.animateIn();
    }
  }

  private animateIn() {
    this.hasAnimated = true;
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
  }
}
```

### Usage Example

```html
<!-- Fade in animation -->
<div appScrollAnimation animationType="fade-in">Content</div>

<!-- Slide in from bottom with delay -->
<div appScrollAnimation animationType="slide-in-up" [animationDelay]="200">Content</div>

<!-- Slide in from left -->
<div appScrollAnimation animationType="slide-in-left" [animationDelay]="300">Content</div>
```

## 2. Hover Effects Examples

### Skill Card Hover Animation
**File:** `src/app/components/skills/skills.component.scss`

```scss
.skill-card {
  background: white;
  padding: 40px 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    // Lift and scale effect
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    .skill-icon {
      // Rotate icon on hover
      transform: scale(1.2) rotate(360deg);
    }

    .skill-name {
      color: white;
    }
  }

  .skill-icon {
    font-size: 3.5rem;
    margin-bottom: 15px;
    transition: transform 0.5s ease;
    display: inline-block;
  }
}
```

### Project Card Hover with Image Zoom
**File:** `src/app/components/projects/projects.component.scss`

```scss
.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;

  &:hover {
    // Card lift effect
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

    .project-image img {
      // Image zoom effect
      transform: scale(1.1);
    }

    .project-overlay {
      // Show overlay with button
      opacity: 1;
    }
  }

  .project-image {
    position: relative;
    overflow: hidden;
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(102, 126, 234, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s ease;

      .view-btn {
        padding: 12px 30px;
        background: white;
        color: #667eea;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        transform: translateY(20px);

        &:hover {
          transform: translateY(20px) scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
```

### Navigation Link Underline Animation
**File:** `src/app/app.component.scss`

```scss
.nav-link {
  color: #2d3748;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  // Animated underline
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #667eea;

    &::after {
      width: 100%;
    }
  }
}
```

## 3. Smooth Scrolling Implementation

### TypeScript Method
**File:** `src/app/app.component.ts`

```typescript
export class AppComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
```

### HTML Usage
**File:** `src/app/app.component.html`

```html
<nav class="nav-links">
  <a (click)="scrollToSection('about')" class="nav-link">About</a>
  <a (click)="scrollToSection('skills')" class="nav-link">Skills</a>
  <a (click)="scrollToSection('projects')" class="nav-link">Projects</a>
  <a (click)="scrollToSection('contact')" class="nav-link">Contact</a>
</nav>
```

### Global Smooth Scrolling
**File:** `src/styles.scss`

```scss
html {
  scroll-behavior: smooth;
}
```

## 4. Form Validation Example

### TypeScript Component
**File:** `src/app/components/contact/contact.component.ts`

```typescript
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Form is valid - process submission
    console.log('Form submitted:', this.contactForm.value);
    this.successMessage = true;
    this.contactForm.reset();
    this.submitted = false;

    // Hide success message after 5 seconds
    setTimeout(() => {
      this.successMessage = false;
    }, 5000);
  }
}
```

### HTML Template with Validation
**File:** `src/app/components/contact/contact.component.html`

```html
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  <!-- Success Message -->
  @if (successMessage) {
    <div class="success-message">
      Thank you! Your message has been sent successfully.
    </div>
  }

  <!-- Name Field -->
  <div class="form-group">
    <label for="name">Name</label>
    <input
      type="text"
      id="name"
      formControlName="name"
      class="form-control"
      [class.is-invalid]="submitted && f['name'].errors"
      placeholder="Your Name">
    @if (submitted && f['name'].errors) {
      <div class="invalid-feedback">
        @if (f['name'].errors['required']) {
          <span>Name is required</span>
        }
        @if (f['name'].errors['minlength']) {
          <span>Name must be at least 2 characters</span>
        }
      </div>
    }
  </div>

  <!-- Email Field -->
  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      formControlName="email"
      class="form-control"
      [class.is-invalid]="submitted && f['email'].errors"
      placeholder="your.email&#64;example.com">
    @if (submitted && f['email'].errors) {
      <div class="invalid-feedback">
        @if (f['email'].errors['required']) {
          <span>Email is required</span>
        }
        @if (f['email'].errors['email']) {
          <span>Please enter a valid email</span>
        }
      </div>
    }
  </div>

  <button type="submit" class="submit-btn">Send Message</button>
</form>
```

## 5. Responsive Design Examples

### Mobile-First Breakpoints
**File:** Various component SCSS files

```scss
// Desktop first approach
.section-title {
  font-size: 3rem;
  margin-bottom: 60px;

  // Tablet
  @media (max-width: 968px) {
    font-size: 2.5rem;
    margin-bottom: 50px;
  }

  // Mobile
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
}

// Grid layout with auto-fit
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

// Flexbox responsive layout
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

## 6. Custom Animations with SCSS

### Slide Down Animation
**File:** `src/app/components/contact/contact.component.scss`

```scss
.success-message {
  background: #10b981;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  animation: slideDown 0.5s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Custom Scrollbar Styling
**File:** `src/styles.scss`

```scss
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}
```

## 7. TypeScript Interface Example

### Project Interface
**File:** `src/app/components/projects/projects.component.ts`

```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Angular and NGXS.',
      technologies: ['Angular', 'NGXS', 'TypeScript', 'SCSS'],
      imageUrl: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce+Platform'
    },
    // More projects...
  ];
}
```

## Summary

These examples demonstrate:

1. **Reusable Directives** - Custom scroll animation directive
2. **Advanced CSS Animations** - Hover effects, transitions, keyframe animations
3. **Responsive Design** - Media queries and flexible layouts
4. **Form Validation** - Reactive forms with validation
5. **Smooth Scrolling** - Native and programmatic scrolling
6. **TypeScript Best Practices** - Interfaces, type safety
7. **Angular Best Practices** - Standalone components, separation of concerns

All code follows Angular style guide and modern best practices.
