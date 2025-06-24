import { defineQuery } from 'next-sanity';

export const mainPageQuery = defineQuery(`*[_type == "mainPage"][0]{
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
  }`);

export const siteSettingQuery = defineQuery(`*[_type == "siteSettings"][0]`);

export const getCurrentServiceQuery = defineQuery(
  `*[_type == "serviceCard" && slug.current == $slug][0]`
);

export const getCurrentBlogQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]`
);
