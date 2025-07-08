import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Пост',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Посилання',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Короткий опис',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Заставка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Основний контент',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'youtube',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'width',
              title: 'Ширина у %',
              type: 'number',
              initialValue: 100,
            },
            {
              name: 'isEmbed',
              title: 'Вмонтувати в текст',
              type: 'boolean',
              options: { layout: 'checkbox' },
            },

            {
              name: 'position',
              title: 'Розміщення',
              type: 'string',
              initialValue: 'center',
              options: {
                list: [
                  { title: 'Зліва', value: 'left' },
                  { title: 'По центру', value: 'center' },
                  { title: 'Справа', value: 'right' },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            },
            {
              name: 'aspectRatio',
              title: 'Формат зображення',
              type: 'number',
              initialValue: 1.77,
              options: {
                list: [
                  { title: '3:4', value: 0.75 },
                  { title: 'Квадрат', value: 1 },
                  { title: '16:9', value: 1.77 },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Основні теги',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Дата публікації',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'mainImage',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.description,
        media: selection.media,
      };
    },
  },
});
