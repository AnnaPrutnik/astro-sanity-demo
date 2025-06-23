import { defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Iamge',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((fields: { text?: string; image?: string }) => {
          if (fields?.text && fields?.image) {
            return 'Вкажи або текст, або зображення, але не обидва';
          }
          if (!fields?.text && !fields?.image) {
            return 'Потрібно вказати або текст, або зображення';
          }
          return true;
        }),
    },

    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
        },
      ],
    },
  ],
});
