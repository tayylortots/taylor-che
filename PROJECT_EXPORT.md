# Portfolio Website - Complete Export Package

This document contains all the code and instructions needed to recreate this pixel-perfect portfolio website.

## 📦 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx (main entry)
│   │   └── components/
│   │       ├── Bubble.tsx
│   │       ├── ContactSection.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── CustomScrollbar.tsx
│   │       ├── Footer.tsx
│   │       ├── Navigation.tsx
│   │       ├── WorkSection.tsx
│   │       ├── HandheldPopup.tsx
│   │       ├── BobsEntertainmentPopup.tsx
│   │       ├── XboxGameArtPopup.tsx
│   │       └── UclaLibraryPopup.tsx
│   ├── imports/ (Figma-generated components and assets)
│   └── styles/
│       ├── fonts.css
│       ├── theme.css
│       ├── tailwind.css
│       └── index.css
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## 🎨 Key Features

1. **Character Reveal Interaction**: Text animation with staggered character appearance
2. **Floating Text Bubbles**: Draggable bubbles with hard-bounded constraints and elastic={0}
3. **Tab Navigation**: Work and Contact sections with smooth transitions
4. **Project Modals**: 4 popup modals (Handheld, Bobs Entertainment, Xbox, UCLA Library)
5. **UCLA Library Modal**: Special features including:
   - Scrollable content with rounded corners
   - 2x2 grid layout for quote boxes
   - Expand/minimize functionality
   - 120px side margins in fullscreen mode
   - Background scroll prevention when open
6. **Custom Scrollbar**: Parallax scrollbar with smooth tracking
7. **Footer with Parallax**: Cloud animations and reveal effects
8. **Mobile Responsive**: Fully responsive with custom breakpoints
9. **Custom Cursor**: Animated cursor that follows mouse movement

## 📋 Dependencies (package.json)

```json
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react-day-picker": "8.10.1",
    "react-dnd": "16.0.1",
    "react-dnd-html5-backend": "16.0.1",
    "react-hook-form": "7.55.0",
    "react-popper": "2.3.0",
    "react-resizable-panels": "2.1.7",
    "react-responsive-masonry": "2.7.1",
    "react-router": "7.13.0",
    "react-slick": "0.31.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "tw-animate-css": "1.3.8",
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "peerDependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}
```

## ⚙️ Configuration Files

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

### postcss.config.mjs
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

## 🎨 Styles

### src/styles/fonts.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700;900&family=Istok+Web:wght@400;700&display=swap');
```

### src/styles/index.css
```css
@import './fonts.css';
@import './theme.css';
@import './tailwind.css';
```

### src/styles/tailwind.css
```css
@import 'tailwindcss';
```

## 🔑 Important Notes for Import

### 1. Figma Assets
The project uses the `figma:asset` import scheme for images:
```typescript
import img from "figma:asset/abc123.png"
```
**Important**: These are virtual modules specific to Figma Make. When importing to Claude or another environment, you'll need to:
- Replace these with actual image URLs or local files
- Update all `figma:asset/` imports in the components

### 2. SVG Imports
SVG files are imported from `/src/imports/` directory:
```typescript
import svgPaths from "../imports/svg-wg56ef214f"
```
These files contain path data for inline SVGs.

### 3. Component Files in /src/imports/
The `/src/imports/` directory contains Figma-generated components that are used within the main components. These need to be preserved.

### 4. Modal Z-Index
All modals use `z-[100]` to ensure they appear above the generate button and scroll indicator.

### 5. Scroll Behavior
- Main container uses `.hide-scrollbar` class
- Custom scrollbar component tracks scroll position
- Modals prevent background scrolling when open

### 6. Motion Library
Using `motion/react` (formerly Framer Motion):
```typescript
import { motion } from 'motion/react'
```

## 🚀 Setup Instructions

1. **Create Project**
   ```bash
   npm create vite@latest portfolio -- --template react-ts
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # Install all dependencies from package.json above
   ```

3. **Copy Files**
   - Copy all source files to respective directories
   - Copy configuration files to root
   - Ensure all imports are properly resolved

4. **Update Asset Imports**
   - Replace all `figma:asset/` imports with actual image paths
   - Verify SVG imports point to correct files

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (≥ 640px)
- **Desktop**: `md:` (≥ 768px)
- **Large Desktop**: `lg:` (≥ 1024px)

## 🎯 Key Design Specifications

### Hero Section
- Uses `overflow-hidden` with `constraintRef` for bubble containment
- Dragging with `dragElastic={0}` for hard boundaries

### Bubbles
- Draggable with constrained boundaries
- Random positions generated on mount
- Different sizes and z-indices for layered effect

### UCLA Library Modal
- Fullscreen mode: 120px horizontal margins (`px-[120px]`)
- Rounded corners removed in fullscreen
- 2x2 grid for quote boxes
- Custom scrollbar styling
- Background scroll prevention

### Footer
- Parallax cloud animations
- Clickable clouds with hover effects
- Reveals on scroll

### Contact Section Links
- Resume: "#"
- LinkedIn: https://www.linkedin.com/in/taylor-che/
- Instagram: https://www.instagram.com/tayylor.tots/
- Behance: https://www.behance.net/taylorche

## 🔧 Customization Points

1. **Colors**: All colors are in hex format (e.g., `#989898`, `#3b3b3b`)
2. **Fonts**: "Istok Web" and "Work Sans" from Google Fonts
3. **Animations**: Motion variants for staggered animations
4. **Spacing**: Responsive gaps using `gap-[16px] sm:gap-[20px] md:gap-[24px]`

## 📝 Component Hierarchy

```
App.tsx
├── CustomCursor
├── Navigation (Work/Contact tabs)
├── Hero Section
│   ├── Bubbles (multiple)
│   └── Generate Button
├── WorkSection
│   ├── HandheldPopup
│   ├── BobsEntertainmentPopup
│   ├── XboxGameArtPopup
│   └── UclaLibraryPopup
├── ContactSection
├── Footer
└── CustomScrollbar
```

## ⚠️ Critical Implementation Details

1. **Modal Backdrop Click**: Modals close when clicking outside
2. **Scroll Lock**: Body scroll is locked when modal is open
3. **Z-Index Hierarchy**: Modals (100) > Generate Button/Scroll Indicator (default)
4. **Drag Constraints**: Bubbles use `useRef` for constraint boundaries
5. **Tab State Management**: Global state for active tab (Work/Contact)
6. **Animation Stagger**: Each element has incrementing delays for sequential appearance

## 🐛 Known Issues & Solutions

- **Modal Not Closing**: Ensure backdrop click handler checks `event.target === event.currentTarget`
- **Images Not Loading**: Replace all `figma:asset` imports with actual paths
- **Scroll Issues**: Verify `.hide-scrollbar` class is applied to main container
- **Z-Index Conflicts**: All modals use `z-[100]`, UI elements use lower values

## 📄 License & Credits

This is a personal portfolio for Taylor Che. All design and code are original.

---

**Last Updated**: February 28, 2026
**Version**: 1.0.0
**Framework**: React 18.3.1 + Vite 6.3.5 + Tailwind CSS 4.1.12
