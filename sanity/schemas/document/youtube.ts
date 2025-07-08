import { defineType, defineField } from 'sanity';
import { YouTubePreview } from '../../components/YoutubePreview';

export const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Назва',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Вставте посилання на відео',
    }),
  ],
  preview: {
    select: {
      title: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
