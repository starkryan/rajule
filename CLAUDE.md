# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Rohit Rayaan (Full Stack Developer) built with TypeScript, TailwindCSS, and shadcn/ui components.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.1.3 with App Router
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: TailwindCSS 3.4.1 with custom design system
- **UI Components**: shadcn/ui (New York style)
- **State Management**: Zustand for theme persistence
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons

### Directory Structure
```
app/                 # Next.js App Router pages
├── layout.tsx      # Root layout with theme provider
├── page.tsx        # Main portfolio page
├── globals.css     # Tailwind + custom CSS variables
└── metadata.ts     # SEO metadata

components/
├── ui/             # shadcn/ui components (don't modify directly)
└── [custom]        # Custom portfolio components

lib/
└── utils.ts        # Utility functions (cn helper, etc.)

store/              # Zustand stores
└── use-theme-store.ts

public/             # Static assets (images, icons)
```

### Key Architectural Patterns

**Theme System**: Dark/light mode with system detection and Zustand persistence
- Theme provider wraps entire app in `app/layout.tsx`
- Use `useTheme` hook from `store/use-theme-store.ts` for theme operations

**Component Design**: Follows shadcn/ui patterns
- Custom components use `cn()` utility for class merging
- Consistent with shadcn/ui design tokens and variants
- Import custom components from `components/` directory

**Styling Approach**:
- Tailwind utility classes with custom CSS variables in `app/globals.css`
- Design system uses HSL color values for consistent theming
- Responsive design with mobile-first approach

**SEO & Performance**:
- Metadata configured in `app/metadata.ts`
- Vercel Analytics and Speed Insights integrated
- Optimized images and Geist font loading

### Development Guidelines

**Import Patterns**:
- Use `@/*` path aliases for internal imports
- Import shadcn/ui components from `components/ui/`
- Custom components use relative imports

**TypeScript**:
- Strict mode enabled
- All components should be properly typed
- Use interfaces for component props

**Styling**:
- Prefer Tailwind utilities over custom CSS
- Use CSS variables from `app/globals.css` for consistent colors
- Follow mobile-first responsive design

**State Management**:
- Use Zustand store for theme state
- Local React state for component-specific data
- Avoid prop drilling where appropriate

### Notes

- No testing framework is currently configured
- Uses shadcn/ui New York style variant
- Framer Motion for page and component animations
- Deployment optimized for Vercel platform