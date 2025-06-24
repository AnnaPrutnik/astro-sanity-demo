import { defineRouting } from 'next-intl/routing';

export const languages = [
  {
    path: 'uk',
    label: 'ua',
  },
  {
    path: 'en',
    label: 'en',
  },
];
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map((item) => item.path),
  localeDetection: false,
  localePrefix: 'as-needed',

  // Used when no locale matches
  defaultLocale: languages.find((item) => item.path === 'en')?.path || 'en',
});
