import { client } from '@cms/lib/sanity.client';
import { draftMode } from 'next/headers';
import Header from '@/components/header/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import Divider from '@/components/shared/Divider';
import { Services } from '@/components/sections/Services';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { mainPageQuery, siteSettingQuery } from '@/api/queries';

export default async function Home() {
  const { isEnabled } = await draftMode();

  const [mainPageData, siteSettings] = await Promise.all([
    client.fetch(
      mainPageQuery,
      { slug: undefined },
      isEnabled
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : undefined
    ),
    client.fetch(
      siteSettingQuery,
      { slug: undefined },
      isEnabled
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : undefined
    ),
  ]);

  if (!mainPageData || !siteSettings) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header logo={siteSettings.logo} />
      <main className="min-h-screen">
        <Hero data={mainPageData.heroSection} />
        <Divider />
        <About data={mainPageData.aboutSection} />
        <Divider />
        <Services data={mainPageData.servicesSection} />
        <Divider />
        <Blog data={mainPageData.blogSection} />
        <Divider />
        <Contact data={siteSettings.contactInfo} />
      </main>
    </>
  );
}
