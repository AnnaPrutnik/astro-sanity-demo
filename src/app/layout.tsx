import type { Metadata } from 'next';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import { DisableDraftMode } from '@/components/DisabledDraftMode';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${geistMono.className} antialiased`}
    >
      <body>
        {children}
        {(await draftMode()).isEnabled ? (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        ) : null}
      </body>
    </html>
  );
}
