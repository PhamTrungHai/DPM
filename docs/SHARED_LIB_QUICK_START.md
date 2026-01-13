# Quick Start: Shared Library Build

## TL;DR

The `dpm-shared` library now has a complete build system that:
- ✅ Compiles TypeScript to JavaScript
- ✅ Builds Tailwind CSS into a single minified file
- ✅ Exports styles as `dpm-shared/styles` for tree-shaking
- ✅ Allows consuming packages to import styles automatically

## Build & Test

```bash
# Build the library
cd shared-lib
pnpm build

# Or from root
pnpm build
```

## Use in Your Package

```typescript
// src/main.tsx or your entry point
import 'dpm-shared/styles';  // ← Add this line
import { Button } from 'dpm-shared';

export default function App() {
  return <Button>Hello</Button>;
}
```

## File Changes

| File | Change |
|------|--------|
| `shared-lib/package.json` | Added build scripts, styles export, sideEffects |
| `shared-lib/src/styles/globals.css` | ✨ New: Tailwind entry point |
| `shared-lib/tailwind.config.js` | Updated content paths, theme colors |
| `shared-lib/src/index.ts` | Added JSDoc documentation |
| `shared-lib/README.md` | Updated build & usage documentation |
| `shared-lib/BUILD_GUIDE.md` | ✨ New: Complete build system guide |
| `app/src/main.tsx` | Added shared styles import |

## Key Concepts

### sideEffects Declaration
```json
"sideEffects": ["dist/**/*.css"]
```
This tells bundlers that CSS files have side effects and must always be included (they affect global styles).

### Exports
```json
"exports": {
  ".": "./dist/index.js",           // import from 'dpm-shared'
  "./styles": "./dist/styles/index.css",  // import from 'dpm-shared/styles'
  "./button": "./dist/components/Button.js"  // import from 'dpm-shared/button'
}
```
Allows granular imports for tree-shaking.

### Build Scripts
```bash
pnpm build              # Run full build (TS + CSS)
pnpm build:styles      # Run only style builds
pnpm build:tailwind    # Compile Tailwind CSS only
pnpm dev               # Watch TypeScript changes
```

## Troubleshooting

**Styles not showing?**
- Verify `import 'dpm-shared/styles'` is in your entry point
- Rebuild: `pnpm build`

**Build fails?**
- Check node version: Node 20+
- Clear cache: `rm -rf node_modules dist && pnpm install`

**See detailed guide:**
- Read `shared-lib/BUILD_GUIDE.md` for complete documentation

## Next Steps

1. ✅ Run `pnpm build` to compile
2. ✅ Test in the app: `pnpm dev`
3. 📝 Add more component styles to `src/styles/globals.css`
4. 🚀 Ready to publish!
