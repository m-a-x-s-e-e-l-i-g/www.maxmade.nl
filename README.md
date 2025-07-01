# MAXmade Website

This is a recreation of your Squarespace website built with SvelteKit and Tailwind CSS.

## Project Structure

- **Navigation**: Fixed header with social links and smooth scrolling
- **Hero Section**: Animated title with glitch effect and call-to-action buttons
- **Portfolio**: Photography sections with modal gallery (placeholders for now)
- **Music**: Interactive music player with FL Studio branding
- **Contact**: Working contact form with social links

## Adding Your Content

### Images
1. Add your photography images to `static/images/`
2. Update the image paths in `src/lib/components/Portfolio.svelte`
3. Recommended image sizes:
   - Portfolio images: 1200x900px (4:3 aspect ratio)
   - High resolution for modal viewing

### Audio Files
1. Add your beats/tracks to `static/audio/`
2. Update the audio paths in `src/lib/components/Music.svelte`
3. Supported formats: MP3, OGG, WAV

### Content Updates
- **Hero text**: Edit `src/lib/components/Hero.svelte`
- **Portfolio descriptions**: Edit `src/lib/components/Portfolio.svelte`
- **Music track info**: Edit `src/lib/components/Music.svelte`
- **Contact form**: Edit `src/lib/components/Contact.svelte`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- ✅ Responsive design
- ✅ Dark theme with modern aesthetics
- ✅ Smooth scrolling navigation
- ✅ Interactive photo gallery with modals
- ✅ Music player interface (simulated playback)
- ✅ Contact form (ready for backend integration)
- ✅ Social media links
- ✅ Accessibility features
- ✅ SEO optimized

## Next Steps

1. Add your actual images to replace placeholders
2. Add your music files
3. Set up a contact form backend (Netlify Forms, Vercel, etc.)
4. Deploy to your hosting platform
5. Update domain configuration

## Styling

The website uses a black/dark gray color scheme with white accents, matching your original Squarespace design. The typography uses clean, modern fonts with plenty of whitespace for a professional look.
