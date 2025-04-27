# Choerul Sofyan Muhammad Falih - Personal Portfolio

A static personal portfolio website showcasing my skills, experience, education, and contact information as a freelance Full Stack Developer. Built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**:
    - Tailwind CSS v4.1 (CSS-first approach)
    - shadcn/ui components
    - CSS variables for theming
- **Animation**: Framer Motion
- **Form Handling**:
    - React Hook Form
    - Zod validation
    - Formspree integration
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── app/               # Next.js App Router pages
├── components/        # React components
│   ├── ui/            # shadcn/ui components
├── lib/               # Utility functions
├── public/            # Static assets
│   ├── images/        # Image assets
│   ├── favicon.svg    # Favicon
│   ├── sitemap.xml    # SEO sitemap
│   ├── robots.txt     # SEO robots file
│   ├── manifest.json  # PWA manifest
├── styles/            # Global styles
├── .github/workflows/ # CI/CD configuration
```

## Deployment

This website is configured for deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

```bash
npm run deploy
```

This will build the site, generate the sitemap and robots.txt, create the `.nojekyll` file, and push it to the `gh-pages` branch.

### Automatic Deployment

The site is automatically deployed when changes are pushed to the main branch, using the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

### Pre-Deployment Checks

Before deploying, it's recommended to run these checks:

```bash
# Check for accessibility issues
npm run check-a11y

# Optimize images
npm run optimize-images

# Analyze bundle size
npm run analyze-bundle
```

## Local Development

```bash
# Clone the repository
git clone https://github.com/choerulsofyan/choerulsofyan.github.io.git
cd choerulsofyan.github.io

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export

# Test static site locally
npx serve out
```

## Performance Optimization

This portfolio includes several performance optimizations:

### Core Web Vitals Monitoring

The site includes a `PerformanceMonitor` component that tracks Core Web Vitals metrics:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to First Byte (TTFB)

### Image Optimization

- The `OptimizedImage` component provides lazy loading, WebP support, and proper image sizing
- Run `npm run optimize-images` to convert and optimize images in the `/public/images` directory
- Images use appropriate `loading`, `decoding`, and `fetchPriority` attributes

### JavaScript Optimization

- Bundle analysis with `npm run analyze-bundle`
- Client-side components are properly marked with "use client" directive
- Minimal JavaScript footprint with static site generation

### CSS Optimization

- Tailwind CSS with PurgeCSS to eliminate unused styles
- CSS variables for theming and dark mode support
- Responsive design with mobile-first approach

### Resource Preloading

- Critical resources are preloaded with the `PreloadResources` component
- Fonts and critical assets are preconnected and preloaded
- Static assets are cached with appropriate headers

## Customization

### Updating Content

- **Personal Information**: Edit content in page files under `app/` directory
- **Projects**: Update project data in `app/projects/page.tsx`
- **Resume**: Modify resume content in `app/resume/page.tsx`
- **Contact**: Update Formspree form ID in `components/ContactForm.tsx`

### Styling

- **Colors**: Edit CSS variables in `app/globals.css`
- **Typography**: Modify font settings in `app/layout.tsx`
- **Components**: Customize shadcn/ui components in `components/ui/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility Features

This portfolio prioritizes accessibility with:

- Semantic HTML structure with proper landmarks
- ARIA attributes where appropriate
- Keyboard navigation support with visible focus indicators
- Skip to content link for keyboard users
- Color contrast meeting WCAG AA standards
- Dark mode support for visual preferences
- Reduced motion support via `prefers-reduced-motion` media query
- Focus management with the `FocusTrap` component for modals
- Accessible form validation and error messages
- Run `npm run check-a11y` to check for accessibility issues

## SEO Optimization

- Structured data with JSON-LD for better search engine understanding
- Open Graph and Twitter meta tags for social sharing
- Sitemap.xml and robots.txt generation
- Semantic HTML with proper heading hierarchy
- Metadata for all pages with appropriate titles and descriptions
- Canonical URLs for all pages
- PWA manifest for installable web app support

## Contact

For any questions or inquiries, please reach out to me at choerulsofyanmf@gmail.com.

## License

MIT  
LinkedIn: [www.linkedin.com/in/choerulsofyan/](https://www.linkedin.com/in/choerulsofyan/)
