# Ryan Wanner Portfolio

A clean, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Single codebase** - Works on all devices (mobile, tablet, desktop)
- ✅ **Mobile-first design** - Optimized for mobile performance
- ✅ **Simple structure** - Easy to understand and modify
- ✅ **Fast loading** - Minimal dependencies, optimized bundles
- ✅ **No subdirectories** - Deploys to root domain
- ✅ **Responsive components** - All components adapt to screen size

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Project Structure

```
ryanwanner/
├── src/
│   ├── app.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── styles/
│   │   └── global.css       # Global styles
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Hero, Business, Tech, CTA
│   └── assets/              # Images
├── public/                  # Static files
├── index.html              # Single HTML file
├── package.json            # Dependencies
├── vite.config.ts          # Build config
└── netlify.toml            # Deployment config
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is configured for Netlify deployment:

1. Push to GitHub
2. Connect repository to Netlify
3. Deploy with default settings
4. Site will be live at root domain

## Key Improvements Over Previous Version

1. **Simplified Structure**: Single project directory without complex paths
2. **Single Entry Point**: One HTML file, one main.tsx
3. **Responsive Design**: CSS-based responsiveness, no device detection
4. **Better Performance**: Smaller bundle, faster load times
5. **Maintainability**: Clear structure, easy to modify

## Mobile Optimization

- Mobile-first CSS with Tailwind
- Touch-friendly buttons (44px minimum)
- Optimized images and assets
- Performance-focused animations
- Viewport meta tags properly configured

## License

MIT