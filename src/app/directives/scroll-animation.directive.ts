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
