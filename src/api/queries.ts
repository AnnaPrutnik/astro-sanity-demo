import { defineQuery } from 'next-sanity';

// greeting[_key == 'en'][0].value;
export const mainPageQuery = defineQuery(`*[_type == "mainPage"][0]{
    title,
    heroSection{
      "title": title[_key==$locale][0].value,
      "text": text[_key==$locale][0].value,
      "btnTitle": btnTitle[_key==$locale][0].value
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

// validation: (rule) =>
//   rule.custom<{value: string; _type: string; _key: string}[]>((value) => {
//     if (!value) {
//       return 'Title is required'
//     }

//     const invalidItems = value.filter(
//       (item) => item.value.split(' ').length > 5,
//     )

//     if (invalidItems.length) {
//       return invalidItems.map((item) => ({
//         message: `Title is too long. Must be 5 words or fewer.`,
//         path: [{_key: item._key}, 'value'],
//       }))
//     }

//     return true
//   }),
