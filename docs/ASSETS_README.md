# Assets Guide

## Profile Image

To add your profile picture:

1. Add your profile image as `profile.jpg` to this folder (`public/`)
2. The image will automatically be displayed in the About section
3. Recommended dimensions: 500x500px or larger (square aspect ratio)
4. Supported formats: JPG, PNG, WebP

The image is referenced in `src/app/components/about/about.component.scss:43` as:
```scss
background: url("/profile.jpg") no-repeat center center;
background-size: cover;
```

## Adding Custom Images

All static assets should be placed in the `public/` folder. They can be referenced in your code using absolute paths starting with `/`.

### Example:
- File location: `public/images/my-image.jpg`
- Reference in code: `url("/images/my-image.jpg")`

### For Project Images

Replace the placeholder URLs in `src/app/components/projects/projects.component.ts` with your actual project screenshots:

```typescript
projects: Project[] = [
  {
    title: 'Your Project Name',
    imageUrl: '/projects/project-1.jpg'  // Place image in public/projects/
  }
]
```

## Current Assets

- `favicon.ico` - Browser tab icon
- `profile.jpg` - **ADD THIS FILE** - Your profile picture (About section)

## Tips

1. Optimize images before adding them (use tools like TinyPNG, ImageOptim)
2. Use appropriate formats:
   - Photos: JPG or WebP
   - Graphics/logos: PNG or SVG
   - Icons: SVG
3. Keep file sizes reasonable (< 500KB for photos, < 100KB for graphics)
