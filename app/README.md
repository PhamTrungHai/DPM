# DPM Web App

A modern React web application built with Vite, showcasing the DPM shared UI component library.

## Project Description

DPM Web App is a demonstration application that utilizes the DPM.UI.Shared component library to build a responsive, interactive user interface. This project serves as both a reference implementation and a development playground for the shared components, featuring hot module replacement (HMR) for efficient development workflows.

## Features

- **Hot Module Replacement (HMR)**: Instant updates during development without full page reloads
- **Shared Component Integration**: Demonstrates usage of reusable UI components from DPM.UI.Shared
- **TypeScript Support**: Full type safety with TypeScript for better developer experience
- **ESLint Integration**: Code quality enforcement with React-specific linting rules
- **Vite Build System**: Lightning-fast build times and optimized production bundles
- **Responsive Design**: Mobile-friendly interface with modern CSS

## Technology Stack

### Languages
- **TypeScript**: Primary language for type-safe React development

### Frameworks & Libraries
- **React 19**: UI framework for building interactive components
- **React DOM 19**: React rendering library for web

### Build Tools & Development
- **Vite 7**: Next-generation frontend tooling for fast development and building
- **@vitejs/plugin-react-swc**: Vite plugin using SWC for ultra-fast React Fast Refresh
- **ESLint**: Code linting with TypeScript and React plugins
- **TypeScript Compiler**: For compiling TypeScript to JavaScript

### Package Management
- **pnpm**: Fast, disk-efficient package manager with workspace support

### Development Tools
- **typescript-eslint**: ESLint rules for TypeScript
- **eslint-plugin-react-hooks**: React hooks linting rules
- **eslint-plugin-react-refresh**: Fast refresh linting for React development

## Installation / Setup Instructions

### Prerequisites
- Node.js >= 20.0.0
- pnpm >= 8.0.0

### How to Clone the Repo
```bash
git clone <repository-url>
```
### Prepare Git Submodule
```bash
git submodule update --init --recursive
```

### How to Install Dependencies
```bash
pnpm install
```

### How to Run the Project Locally
1. Start the development server:
   ```bash
   turbo run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (default Vite port)

3. The app will automatically reload when you make changes to the source code

## Configuration / Environment Variables

This application doesn't require specific environment variables for basic functionality. However, for production deployments or advanced configurations, you may need:


Create a `.env` file in the app directory:
```env

```

## Usage Guide

### Development Workflow

1. **Start Development Server**: Run `pnpm dev` to start the Vite development server
2. **Edit Components**: Modify files in `src/` directory
3. **View Changes**: Changes are automatically reflected in the browser via HMR
4. **Build for Production**: Run `pnpm build` to create optimized production build

### Application Features

- **Counter Component**: Interactive counter using the shared DPM.UI.Shared library
- **State Management**: Local state management with React hooks
- **Responsive Layout**: Adapts to different screen sizes

### Code Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── App.css          # Application styles
├── index.css        # Global styles
└── assets/          # Static assets (images, icons, etc.)
```

## Running Tests

Currently, no test suite is configured. To add testing capabilities:

1. Install testing dependencies:
   ```bash
   pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
   ```

2. Configure Vitest in `vite.config.ts`:
   ```typescript
   /// <reference types="vitest" />
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react-swc'

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: './src/test/setup.ts',
     },
   })
   ```

3. Add test scripts to `package.json`:
   ```json
   "scripts": {
     "test": "vitest",
     "test:ui": "vitest --ui",
     "test:run": "vitest run"
   }
   ```

4. Run tests:
   ```bash
   pnpm test
   ```

## Deployment Instructions

### Building for Production

1. Build the application:
   ```bash
   pnpm build
   ```

2. The built files will be in the `dist/` directory

3. Preview the production build locally:
   ```bash
   pnpm preview
   ```

### Deployment Options

#### Static Hosting (Recommended)

Deploy the `dist/` folder to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag & drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: For scalable static hosting

#### Example: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

#### Example: Deploy to Netlify

1. Build the project:
   ```bash
   pnpm build
   ```

2. Deploy via Netlify CLI:
   ```bash
   npx netlify-cli deploy --dir=dist --prod
   ```

### CI/CD Pipeline

For automated deployments, configure your CI/CD pipeline to:
- Install dependencies: `pnpm install`
- Run linting: `pnpm lint`
- Run tests: `pnpm test` (when added)
- Build: `pnpm build`
- Deploy the `dist/` folder

## Contribution Guidelines

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run linting: `pnpm lint`
5. Test your changes locally
6. Build the application: `pnpm build`
7. Commit your changes with descriptive messages
8. Push to your fork
9. Create a Pull Request

### Code Standards

- Use TypeScript for all new code
- Follow React best practices and hooks guidelines
- Ensure components are accessible (ARIA attributes, keyboard navigation)
- Write clear, concise component names and props
- Use meaningful variable and function names

### Component Development Guidelines

- Keep components small and focused on single responsibilities
- Use TypeScript interfaces for props
- Provide default values where appropriate
- Include proper error boundaries for robustness
- Test components in different states (loading, error, etc.)

### Commit Convention

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code restructuring
- `test:` for adding tests
- `chore:` for maintenance tasks

### Pull Request Guidelines

- Provide a clear description of the changes
- Include screenshots for UI changes
- Ensure all CI checks pass
- Request review from maintainers
- Keep PRs focused on single features or fixes

## License

This project is licensed under the ISC License. See the root `package.json` for details.
