# MAXmade Portfolio Website

A modern, responsive portfolio website showcasing Max Seelig's work in development, photography, art, and music. Built with SvelteKit and Tailwind CSS.

## Live Website

🌐 **[www.maxmade.nl](https://www.maxmade.nl)**

## Technology Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) 2.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.x
- **Language**: TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [Netlify](https://netlify.com)
- **Image Gallery**: Custom implementation with modal support
- **Icons**: Custom SVG components

## Website Sections

### 🎬 Hero Section

- Video background with fallback image
- Animated title with glitch effects
- Call-to-action buttons
- Responsive design for mobile devices

### 👨‍💻 About Section

- Personal introduction and background
- Skills and expertise showcase
- Animated signature element
- Professional summary

### 💻 Projects Section

- Dynamic project showcase powered by `src/lib/data/projects.ts`
- Category filtering (Web Applications, Tools, Data, etc.)
- Live links and GitHub repository links
- Technology tags with color coding
- Star count and license information

### 📸 Photography Section

- Automated image gallery generation
- Modal image viewing
- Responsive grid layout
- Images sourced from `static/images/gallery/`

### 🐰 Konine Art Section

- Showcase of rabbit-themed artwork
- Custom illustrations and character designs

### 🎵 Music Section

- Embedded SoundCloud playlists
- Spotify track integration
- Audio streaming capabilities

### 📧 Contact Section

- Contact form (ready for backend integration)
- Social media links
- Professional contact information

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/m-a-x-s-e-e-l-i-g/www.maxmade.nl.git
cd www.maxmade.nl

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build Process

```bash
# Generate image list and build for production
npm run build

# Preview production build
npm run preview

# Generate images list only
npm run generate-images
```

The build process includes:

1. **Image Generation**: Automatically scans `static/images/gallery/` and generates `src/lib/generated-images.json`
2. **Vite Build**: Optimized production build with code splitting
3. **Netlify Optimization**: Configured for Netlify deployment

### Code Quality

```bash
# Format code
npm run format

# Lint code
npm run lint

# Type checking
npm run check

# Type checking in watch mode
npm run check:watch
```

## Project Structure

```
src/
├── lib/
│   ├── components/          # Svelte components
│   │   ├── About.svelte
│   │   ├── Contact.svelte
│   │   ├── Hero.svelte
│   │   ├── KonineArt.svelte
│   │   ├── Music.svelte
│   │   ├── Navigation.svelte
│   │   ├── Photography.svelte
│   │   ├── Projects.svelte
│   │   └── icons/           # SVG icon components
│   ├── data/
│   │   └── projects.ts      # Project data and metadata
│   └── generated-images.json # Auto-generated image list
├── routes/
│   ├── +layout.svelte       # Global layout
│   ├── +page.svelte         # Homepage
│   └── projects/            # Project detail pages
└── app.html                 # HTML template

static/
├── images/
│   └── gallery/             # Photography portfolio images
├── video/                   # Hero background videos
└── favicon.png

scripts/
└── generate-images.js       # Image list generation script
```

## Content Management

### Adding Projects

Edit `src/lib/data/projects.ts` to add new projects:

```typescript
{
  name: "project-name",
  displayName: "Project Display Name",
  description: "Project description",
  technologies: ["Svelte", "TypeScript"],
  topics: ["web", "development"],
  stars: 0,
  license: "MIT",
  isLive: true,
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/username/repo",
  category: "Web Applications"
}
```

### Adding Images

1. Place images in `static/images/gallery/`
2. Run `npm run generate-images` to update the image list
3. Images are automatically included in the photography section

### Updating Content

- **Hero text**: `src/lib/components/Hero.svelte`
- **About section**: `src/lib/components/About.svelte`
- **Contact info**: `src/lib/components/Contact.svelte`
- **Music embeds**: `src/lib/components/Music.svelte`

## Features

- ✅ **Responsive Design**: Mobile-first approach with breakpoint optimization
- ✅ **Dark Theme**: Modern black/gray aesthetic with white accents
- ✅ **Smooth Scrolling**: Anchor-based navigation with smooth transitions
- ✅ **Dynamic Projects**: Auto-updating project showcase from data file
- ✅ **Image Gallery**: Automated generation with modal viewing
- ✅ **Video Background**: Optimized hero video with mobile fallbacks
- ✅ **Music Integration**: SoundCloud and Spotify embeds
- ✅ **SEO Optimized**: Meta tags, structured data, and accessibility
- ✅ **Performance**: Code splitting, lazy loading, and optimization
- ✅ **TypeScript**: Full type safety and IntelliSense support
- ✅ **Modern CSS**: Tailwind CSS 4.x with custom animations

## Deployment

The site is configured for Netlify deployment with:

- Automatic builds on push to main branch
- Netlify adapter for SvelteKit
- Build command: `npm run build`
- Publish directory: `.svelte-kit/output/client`

### Environment Setup

No environment variables required for basic functionality.

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with ES2022 support

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Max Seelig](https://github.com/m-a-x-s-e-e-l-i-g)
