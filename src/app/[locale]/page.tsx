import { client } from '@cms/lib/sanity.client';
import { draftMode } from 'next/headers';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import Divider from '@/components/shared/Divider';
import { Services } from '@/components/sections/Services';
import { Blog } from '@/components/sections/Blog';

import { mainPageQuery } from '@/api/queries';

export default async function Home() {
  const { isEnabled } = await draftMode();

  const mainPageData = await client.fetch(
    mainPageQuery,
    { slug: undefined },
    isEnabled
      ? {
          perspective: 'previewDrafts',
          useCdn: false,
          stega: true,
        }
      : undefined
  );

  if (!mainPageData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen">
      <Hero data={mainPageData.heroSection} />
      <Divider />
      <About data={mainPageData.aboutSection} />
      <Divider />
      <Services data={mainPageData.servicesSection} />
      <Divider />
      <Blog data={mainPageData.blogSection} />
    </main>
  );
}
