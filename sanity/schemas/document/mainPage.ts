import { defineField, defineType } from 'sanity';
import GlobeIcon from '../../components/GlobeIcon';

export const mainPage = defineType({
  name: 'mainPage',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Перша секція',
      options: { collapsible: true, collapsed: false },
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'internationalizedArrayColoredText',

          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'text',
          title: 'Короткий опис',
          type: 'internationalizedArrayText',

          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'btnTitle',
          title: 'Підпис кнопки',
          type: 'internationalizedArrayString',

          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'Секція Про нас',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: "Ім'я",
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Professional Title',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Profile Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'bio',
          title: 'Biography',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'statistics',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
              ],
              preview: {
                select: {
                  label: 'label',
                  number: 'number',
                },
                prepare(selection) {
                  return {
                    title: `${selection.label} ${selection.number}`,
                    media: GlobeIcon,
                  };
                },
              },
            },
          ],
        },
        {
          name: 'credentials',
          title: 'Credentials',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'serviceCard' }] }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'blogSection',
      title: 'Blog Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'articles',
          title: 'Latest articles',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'post' }] }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Main Page',
        subtitle: 'Main page content',
        media: 'image',
        url: '/preview',
      };
    },
  },
});
