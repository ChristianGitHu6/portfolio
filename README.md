# Angular Portfolio Landing Website

A modern, responsive single-page portfolio website built with Angular 18, featuring smooth scroll animations, interactive hover effects, and a clean, professional design.

## Features

### Sections
1. **About Me** - Personal introduction with animated profile placeholder
2. **Skills** - Interactive skill cards showcasing technical expertise
3. **Projects** - Portfolio showcase with 3 sample projects and hover effects
4. **Contact** - Functional contact form with validation

### Animations & Interactivity
- Scroll-triggered fade-in and slide-in animations
- Hover effects on cards, buttons, and images (scale, translate, shadow)
- Smooth scrolling between sections
- Sticky navigation header
- Responsive design for desktop and mobile

### Technologies Used
- Angular 18
- TypeScript
- SCSS
- Reactive Forms
- Custom Directives
- Standalone Components

## Project Structure

```
src/app/
├── components/
│   ├── about/          # About Me section
│   ├── skills/         # Skills showcase
│   ├── projects/       # Project portfolio
│   └── contact/        # Contact form
├── directives/
│   └── scroll-animation.directive.ts  # Reusable scroll animation directive
├── app.component.*     # Main app component with navigation
└── app.routes.ts       # App routing configuration
```

## Key Implementation Details

### Scroll-Triggered Animations
The `ScrollAnimationDirective` (src/app/directives/scroll-animation.directive.ts:1) provides reusable scroll-triggered animations:

```typescript
// Usage in templates
<div appScrollAnimation animationType="fade-in" [animationDelay]="200">
  Content here
</div>
```

Supported animation types:
- `fade-in` - Opacity transition
- `slide-in-left` - Slide from left
- `slide-in-right` - Slide from right
- `slide-in-up` - Slide from bottom

### Hover Effects
Components implement various hover effects in their SCSS files:

**Skill Cards** (src/app/components/skills/skills.component.scss:38):
- Transform: translateY and scale
- Background gradient change
- Icon rotation

**Project Cards** (src/app/components/projects/projects.component.scss:31):
- Image zoom effect
- Overlay with call-to-action button
- Shadow enhancement

**Navigation Links** (src/app/app.component.scss:50):
- Animated underline effect
- Color transition

### Form Validation
Contact form (src/app/components/contact/contact.component.ts:18) uses Angular Reactive Forms:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Message: Required, min 10 characters

### Responsive Design
All components are fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

Media queries are implemented in component SCSS files.

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18 or higher)

### Installation

```bash
cd portfolio-app
npm install
```

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
ng serve
```

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
ng build
```

For production build:

```bash
ng build --configuration production
```

## Customization Guide

### Update Personal Information

1. **About Section** (src/app/components/about/about.component.html:8):
   - Edit the introduction paragraphs
   - **Add profile image**: Place your `profile.jpg` in the `public/` folder (recommended size: 500x500px)

2. **Skills** (src/app/components/skills/skills.component.ts:18):
   - Modify the `skills` array with your technologies
   - Update icons (currently using emojis)

3. **Projects** (src/app/components/projects/projects.component.ts:20):
   - Update the `projects` array with your actual projects
   - Replace placeholder images with real screenshots
   - Update descriptions and technologies

4. **Contact Information** (src/app/components/contact/contact.component.html:13):
   - Update email, phone, and location
   - Configure form submission endpoint

### Styling Customization

**Color Scheme** (global):
The main gradient colors are defined throughout the SCSS files:
- Primary: `#667eea` (Purple-Blue)
- Secondary: `#764ba2` (Purple)

To change the color scheme, update these values in:
- src/styles.scss
- Component SCSS files

**Fonts**:
Default font is 'Segoe UI'. To change, update `font-family` in src/styles.scss:13.

## Angular Best Practices Implemented

1. **Standalone Components** - All components use the standalone API
2. **Component Separation** - Each section is a separate, reusable component
3. **Reusable Directives** - Animation logic extracted into a directive
4. **Reactive Forms** - Type-safe form handling with validation
5. **SCSS Modules** - Component-scoped styling
6. **TypeScript Interfaces** - Type safety for data models
7. **Responsive Design** - Mobile-first approach with media queries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Credits

Built with Angular 18 and modern web technologies.
