import type { Metadata } from 'next';
import { client } from '@cms/lib/sanity.client';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import { DisableDraftMode } from '@/components/DisabledDraftMode';
import { Geist, Geist_Mono } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/header/Header';
import { siteSettingQuery } from '@/api/queries';
import { Contact } from '@/components/sections/Contact';
import Divider from '@/components/shared/Divider';

import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sanity Demo',
  description: 'Demo version for Sanity capabilities',
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const { isEnabled } = await draftMode();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const siteSettings = await client.fetch(
    siteSettingQuery,
    { slug: undefined, locale },
    isEnabled
      ? {
          perspective: 'previewDrafts',
          useCdn: false,
          stega: true,
        }
      : undefined
  );

  if (!siteSettings) {
    return notFound();
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.className} ${geistMono.className} antialiased`}
    >
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="title" content={siteSettings.title} />
        <meta name="description" content={siteSettings.description} />
        <title>{siteSettings.title}</title>
      </head>
      <body>
        <NextIntlClientProvider>
          <Header logo={siteSettings.logo} />
          {children}
          {isEnabled ? (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          ) : null}
          <Divider />
          <Contact data={siteSettings.contactInfo} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
