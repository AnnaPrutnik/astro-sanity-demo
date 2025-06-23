import { getMainPageData, getSiteSettings } from '@/api/queries';
import Header from '@/components/header/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import Divider from '@/components/shared/Divider';
import { Services } from '@/components/sections/Services';
import { Blog } from '@/components/sections/Blog';

export default async function Home() {
  const [mainPageData, siteSettings] = await Promise.all([
    getMainPageData(),
    getSiteSettings(),
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
      </main>
    </>
  );
}
