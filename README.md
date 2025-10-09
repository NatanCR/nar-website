# NAR Idealize - Soluções Paisagísticas

A modern, responsive website for NAR Idealize, a landscaping company specializing in natural green walls, hanging gardens, and decorative plant arrangements. Built with React, TypeScript, and modern web technologies.

## 🌿 About

NAR Idealize is a landscaping company that transforms environments and events with natural green solutions. This website showcases their services including:

- **Paredes verdes naturais** - Natural green walls with selected plants
- **Jardins pendentes** - Hanging gardens with live plants
- **Vasos e arranjos** - Decorative pots and arrangements

## 🚀 Tech Stack

### Core Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.1** - Fast build tool and development server
- **React Router DOM 6.26.2** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Framer Motion 12.4.7** - Animation library for React
- **Lucide React** - Beautiful, customizable icons

### State Management & Data
- **TanStack Query 5.56.2** - Data fetching and caching
- **React Hook Form 7.53.0** - Form handling
- **Zod 3.23.8** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🏗️ Architecture & Design Patterns

### Project Structure
```
src/
├── components/ui/          # Reusable UI components (shadcn/ui)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── pages/                  # Route components
│   ├── Index.tsx          # Homepage with hero and services
│   ├── ParedesVerdes.tsx  # Green walls service page
│   ├── JardinsPendentes.tsx # Hanging gardens service page
│   ├── Vasos.tsx          # Pots and arrangements page
│   └── NotFound.tsx       # 404 error page
├── App.tsx                # Main app component with routing
└── main.tsx               # Application entry point
```

### Design Patterns

#### 1. **Component Composition**
- Modular, reusable components using shadcn/ui
- Compound component patterns for complex UI elements
- Custom hooks for shared logic

#### 2. **Provider Pattern**
- `QueryClientProvider` for data fetching
- `TooltipProvider` for tooltip context
- `BrowserRouter` for routing context

#### 3. **Route-Based Architecture**
- File-based routing with React Router
- Lazy loading capabilities
- Protected routes and error boundaries

#### 4. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Breakpoint-based responsive layouts
- Flexible grid systems

#### 5. **Animation Patterns**
- Framer Motion for smooth transitions
- Intersection Observer for scroll animations
- CSS animations for micro-interactions

## 🎨 Design System

### Color Palette
- **Brand Green**: `#A5C34F` (Primary brand color)
- **Brand Green Light**: `#DBF9E0` (Light accent)
- **Brand Dark**: `#4D5B58` (Dark accent)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Display Font**: SF Pro Display (Headings)
- **Body Font**: Inter (Body text)
- **Responsive typography** with Tailwind's type scale

### Components
- **Hero Section** with image carousel
- **Service Cards** with hover effects
- **Gallery Grids** for showcasing work
- **Contact Forms** with validation
- **Navigation** with smooth transitions

## 📱 Features

### Core Functionality
- ✅ **Responsive Design** - Works on all device sizes
- ✅ **Image Carousel** - Auto-rotating hero images
- ✅ **Service Navigation** - Dedicated pages for each service
- ✅ **Contact Integration** - Direct email contact functionality
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **SEO Optimized** - Proper meta tags and structure

### Performance
- ⚡ **Fast Loading** - Vite's optimized build process
- 🎯 **Code Splitting** - Automatic route-based splitting
- 📦 **Tree Shaking** - Unused code elimination
- 🖼️ **Image Optimization** - Optimized asset loading

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with base path for GitHub Pages
- `tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## 📄 License

This project is private and proprietary to NAR Idealize.

## 👥 Contributing

This is a private project. For any issues or suggestions, please contact the development team.

---

**Built with ❤️ for NAR Idealize - Transforming spaces with natural beauty.**
