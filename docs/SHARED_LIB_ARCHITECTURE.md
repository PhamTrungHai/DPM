# Shared Library Build Architecture

## Build Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│                    pnpm build                                │
└─────────────────────┬───────────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
   ┌─────────┐            ┌──────────────────┐
   │   tsc   │            │ npm run build:css│
   └────┬────┘            └────────┬─────────┘
        │                          │
        │                ┌─────────┴──────────┐
        │                │                    │
        │                ▼                    ▼
        │        ┌──────────────────┐  ┌───────────────┐
        │        │ build:tailwind   │  │  copy:css     │
        │        │                  │  │               │
        │        │ tailwindcss -i   │  │ cp src/App.css│
        │        │ src/styles/...   │  │ dist/styles/  │
        │        └────────┬─────────┘  └───────┬───────┘
        │                 │                    │
        │                 ▼                    ▼
        │        ┌──────────────────┐  ┌───────────────┐
        │        │ dist/styles/     │  │ dist/styles/  │
        │        │ index.css        │  │ components.css│
        │        │ (minified)       │  │               │
        │        └────────┬─────────┘  └───────┬───────┘
        │                 │                    │
        └────────┬────────┴────────────────────┘
                 │
                 ▼
        ┌──────────────────────────────┐
        │  Final dist/ directory       │
        ├──────────────────────────────┤
        │ ├─ index.js                  │
        │ ├─ index.d.ts                │
        │ ├─ components/               │
        │ │  ├─ Button.js              │
        │ │  ├─ Button.d.ts            │
        │ │  └─ counter.js             │
        │ └─ styles/                   │
        │    ├─ index.css              │
        │    └─ components.css         │
        └──────────────────────────────┘
```

## Consumption Flow

```
┌─────────────────────────────────────────────────────┐
│  Consuming Package (e.g., app/)                     │
└─────────────────────┬───────────────────────────────┘
                      │
        ┌─────────────┴──────────────┐
        │                            │
        ▼                            ▼
    ┌────────────────┐         ┌──────────────────┐
    │ import from    │         │ import 'dpm-     │
    │ 'dpm-shared'   │         │ shared/styles'   │
    └────────┬───────┘         └────────┬─────────┘
             │                          │
             │ resolves via             │ resolves via
             │ package.json             │ package.json
             │ exports["."]             │ exports["./styles"]
             │                          │
             ▼                          ▼
    ┌────────────────┐         ┌──────────────────┐
    │ dist/index.js  │         │ dist/styles/     │
    │ (components)   │         │ index.css        │
    └────────┬───────┘         └────────┬─────────┘
             │                          │
             └──────────┬───────────────┘
                        │
                        ▼
            ┌──────────────────────────┐
            │  Bundler (Vite/Webpack)  │
            │  - Bundles components    │
            │  - Includes CSS via      │
            │    sideEffects           │
            │  - Tree-shakes unused    │
            │    code & styles         │
            └──────────┬───────────────┘
                        │
                        ▼
            ┌──────────────────────────┐
            │  Final Production Bundle │
            │  - Minified JS           │
            │  - CSS included inline   │
            │  - Type definitions      │
            └──────────────────────────┘
```

## CSS Architecture Layers

```
┌─────────────────────────────────────────────────┐
│        src/styles/globals.css                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  @layer base {                                  │
│    /* Reset & base element styles */           │
│    :root { ... }                                │
│    body { ... }                                 │
│  }                                              │
│                                                 │
├─────────────────────────────────────────────────┤
│  @layer components {                            │
│    /* Reusable component classes */             │
│    .dpm-button { ... }                          │
│    .dpm-button-primary { ... }                  │
│  }                                              │
│                                                 │
├─────────────────────────────────────────────────┤
│  @layer utilities {                             │
│    /* Tailwind utilities (auto-generated) */    │
│    .flex { ... }                                │
│    .gap-4 { ... }                               │
│  }                                              │
│                                                 │
└─────────────────────────────────────────────────┘
                     │
                     │ tailwindcss build process
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│  dist/styles/index.css                          │
│  (Minified, tree-shaken, production-ready)      │
└─────────────────────────────────────────────────┘
```

## Module Resolution

```
┌──────────────────────────────────┐
│  import statement in consumer     │
│  e.g., app/src/main.tsx          │
└──────────┬───────────────────────┘
           │
           │ "import { Button } from 'dpm-shared'"
           │
           ▼
┌──────────────────────────────────┐
│  package.json resolution         │
│                                  │
│  exports: {                       │
│    ".": {                         │
│      "import": "./dist/index.js"  │
│    }                              │
│  }                                │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│  dist/index.js                   │
│  (Main entry point)              │
│  export * from './components'    │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│  dist/components/Button.js        │
│  (Component implementation)       │
└──────────────────────────────────┘
```

## Tree-Shaking Mechanism

```
┌─────────────────────────────────────┐
│  Consuming package source code      │
│  Uses: Button, but NOT Counter      │
└──────────┬────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Bundler (Vite with tree-shaking)   │
│                                     │
│  Marks unused:                      │
│  - Counter component                │
│  - Unused Tailwind classes          │
│  - Dead code paths                  │
└──────────┬────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Final Bundle                       │
│  ✓ Button component included        │
│  ✗ Counter removed                  │
│  ✓ Only used CSS classes included   │
│  ✗ Unused Tailwind utilities removed│
└─────────────────────────────────────┘
```

## Package Exports Map

```
Entry Point                  Resolves To
─────────────────────────────────────────────────────────
'dpm-shared'         →  dist/index.js (all components)
'dpm-shared/styles'  →  dist/styles/index.css (CSS only)
'dpm-shared/button'  →  dist/components/Button.js
'dpm-shared/counter' →  dist/components/counter.js
'dpm-shared/api'     →  dist/api/index.js
```

All exports include type definitions (.d.ts) when available.
