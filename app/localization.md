# Localization

This document describes the internationalization (i18n) setup for the DPM Web App.

## Overview

The application uses [i18next](https://www.i18next.com/) with [react-i18next](https://react.i18next.com/) for internationalization. This allows the app to support multiple languages and easily manage translations.

## Supported Languages

- English (`en`) - Default language
- Vietnamese (`vi`)

## Namespaces

The translations are organized into namespaces:

- `common`: General translations used throughout the app
- `error`: Error-related messages

## File Structure

```
src/i18n/
├── index.ts          # i18next configuration
├── resources.ts      # Translation resources import
├── types.d.ts        # TypeScript types for i18n
└── locales/
    ├── en/
    │   ├── common.json
    │   └── error.json
    └── vi/
        ├── common.json
        └── error.json
```

## Usage

### Using the TranslationText Component

The `TranslationText` component is a wrapper around `useTranslation` that simplifies rendering translated text in JSX.

```tsx
import TranslationText from '@/components/TranslationText';

// Basic usage
<TranslationText i18nKey="hello" />

// With namespace
<TranslationText namespace="error" i18nKey="404.title" />

// With prefix
<TranslationText namespace="error" i18nKey="title" prefix="404" />

// Render as different element
<TranslationText as="h1" i18nKey="welcome" />
```

### Direct useTranslation Hook

For more complex scenarios, you can use the `useTranslation` hook directly:

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
    const { t } = useTranslation('common');

    return <p>{t('hello')}</p>;
}
```

## Adding New Translations

1. Add the key-value pairs to the appropriate JSON files in `src/i18n/locales/[language]/`

2. For new namespaces, update:
   - `src/i18n/resources.ts` to import the new files
   - `src/i18n/index.ts` to include the namespace in the `ns` array if needed

3. Update TypeScript types in `src/i18n/types.d.ts` if necessary

## Configuration

The i18next configuration is in `src/i18n/index.ts`:

- Default language: `en`
- Fallback language: `en`
- Default namespace: `common`

## Best Practices

- Use descriptive keys that indicate context
- Keep translations consistent across languages
- Use prefixes for grouped translations (e.g., error codes)
- Test translations in both supported languages

## Example Translation Files

### common.json
```json
{
  "hello": "Hello",
  "welcome": "Welcome to DPM"
}
```

### error.json
```json
{
  "404": {
    "title": "Page Not Found",
    "message": "The page you are looking for does not exist."
  },
  "500": {
    "title": "Server Error",
    "message": "An unexpected server error occurred."
  }
}
```
</content>
