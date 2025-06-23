import { client } from '../../sanity/lib/sanity.client';
import { MainPageType, SiteSettingsType } from '../../types/sanityTypes';

export async function getMainPageData(): Promise<MainPageType> {
  const query = `*[_type == "mainPage"][0]{
    title,
    heroSection{
      title,
      text,
      btnTitle
    },
    aboutSection{
      bio,
      credentials,
      image,
      name,
      statistics,
      title,
    },
    servicesSection{
      title,
      text,
      services[]->
    },
    blogSection{
    title,
      text,
      articles[]->
    }
  }`;

  return client.fetch(query);
}

export async function getSiteSettings(): Promise<SiteSettingsType> {
  const query = `*[_type == "siteSettings"][0]`;

  return client.fetch(query);
}
